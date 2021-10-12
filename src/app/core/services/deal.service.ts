import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { uniqBy } from 'lodash';

import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/api-response';
import { Deal } from '../models/deal';
import { DealQueryParams } from '../models/deal-query-params';
import { Store } from '../models/store';
import { StoreService } from './store.service';

/**
 * Assumptions made here was deals are not fast-changing hence can be cached between page refresh
 * 
 * getDeals(params): Observable<APIResponse>
 * 
 * getDeals function receives fetching params, sanitizes them and delegates the call to an private _getDeals function
 * 
 * getDealsByGame(params): Observable<APIResponse>
 * 
 * This function receives params title and delegates to _getDeals
 * 
 * _getDeals(httpParams): Observable<APIResponse>
 * 
 * This function has a number of roles:
 * 1. Find if the query has been done before, if so return last query result else
 * 2. Generates a new observable and cache it along with its key
 * 3. Convert server response to APIResponse interface, so that we know how many records from API match current query
 * 4. Combine deals with their associated stores
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class DealService {
  private readonly _subjects = new Map<string, Observable<any>>();

  constructor(private http: HttpClient, private storeService: StoreService) { }

  getDeals(params: DealQueryParams = null): Observable<APIResponse> {

    const { defaultPageSize } = environment

    let httpParams = new HttpParams()
    for (let [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, value)
    }

    const { pageNumber, onSale } = params

    if (!pageNumber) {
      httpParams = httpParams.set('pageNumber', 1).set('pageSize', defaultPageSize)
    }

    if (params.onSale)
      httpParams = httpParams.set('onSale', onSale && 1)

    return this._getDealsByParams(httpParams)
  }

  getDealsByGame(title: string): Observable<APIResponse> {
    let httpParams = new HttpParams().set('title', title).set('exact', 1).set('sortBy', 'Price')

    return this._getDealsByParams(httpParams)
  }

  // Get all deal counts per store. Cache results if not exist

  getStoreDealCounts(storeID: string): Observable<number> {
    let httpParams = new HttpParams().set('storeID', storeID).set('pageSize', 1)

    const cacheKey = `storeID_${storeID}`

    if (this._subjects.get(cacheKey)) {
      return this._subjects.get(cacheKey)
    }

    const newSubject = this.http.get(environment.baseUrl + 'deals', { params: httpParams, observe: 'response' }).pipe(
      map((resp) => {
        return +resp.headers.get('X-Total-Page-Count')
      }),
      shareReplay()
    )
    this._subjects.set(cacheKey, newSubject)
    return this._subjects.get(cacheKey)
  }

  getLocalStorageDeal(id: string): Observable<Deal> {
    const deals = JSON.parse(localStorage.getItem('deals'))

    return of(deals.find((deal: Deal) => deal.dealID === id))
  }

  private _getDealsByParams(params: HttpParams) {
    const cacheKey = this._generateCacheKey(params);

    if (this._subjects.get(cacheKey)) {
      return this._subjects.get(cacheKey)
    }

    const newSubject = combineLatest([
      this.http.get(environment.baseUrl + 'deals', { params, observe: 'response' }),
      this.storeService.getStores()
    ]).pipe(
      map(([resp, stores]) => {
        const deals = this._updateDealStoreNames(resp.body as any, stores);
        return { ...resp, body: deals }
      }),
      map(resp => {
        return { totalItems: +resp.headers.get('X-Total-Page-Count'), items: resp.body }
      }),
      shareReplay()
    )
    this._subjects.set(cacheKey, newSubject)
    return this._subjects.get(cacheKey)
  }

  private _updateDealStoreNames(deals: Deal[], stores: Store[]) {
    return deals.map((deal: Deal) => {
      const store = stores.find(store => store.storeID === deal.storeID);
      return { ...deal, storeName: store.storeName }
    })
  }

  private _saveToLocalStorage(deals: Deal[]) {
    const storedDeals = JSON.parse(localStorage.getItem('deals')) || []
    const newDeals = uniqBy([...storedDeals, ...deals], 'dealID')
    localStorage.setItem('deals', JSON.stringify(newDeals))
  }

  private _generateCacheKey(params: HttpParams) {
    let keyValues: string[] = []
    params.keys().forEach(key => {
      keyValues.push(key)
      keyValues.push(params.get(key).toString())
    })
    return keyValues.join('_')
  }
}
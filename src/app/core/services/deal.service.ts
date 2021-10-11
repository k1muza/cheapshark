import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { uniqBy } from 'lodash';

import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/api-response';
import { Deal } from '../models/deal';
import { DealQueryParams } from '../models/deal-query-params';
import { Store } from '../models/store';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  getDeals(params: DealQueryParams = null): Observable<APIResponse> {

    let httpParams = new HttpParams()

    if (!params.pageNumber) {
      params = { ...params, pageNumber: 1, pageSize: 6 }
    }

    if (params.onSale)
      params.onSale = +params.onSale

    for (let [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, value)
    }

    return this._getDealsByParams(httpParams)
  }

  getDealsByGame(title: string): Observable<APIResponse> {

    let httpParams = new HttpParams().set('title', title).set('exact', 1).set('sortBy', 'Price')

    return this._getDealsByParams(httpParams)
  }

  getStoreDealCounts(storeID: string): Observable<number> {
    let httpParams = new HttpParams().set('storeID', storeID).set('pageSize', 1)

    return this.http.get(environment.baseUrl + 'deals', { params: httpParams, observe: 'response' }).pipe(
      map((resp) => {
        return +resp.headers.get('X-Total-Page-Count')
      })
    )
  }

  getLocalStorageDeal(id: string): Observable<Deal> {
    const deals = JSON.parse(localStorage.getItem('deals'))
    return of(deals.find((deal: Deal) => deal.dealID === id))
  }

  _getDealsByParams(params: HttpParams) {
    return combineLatest([
      this.http.get(environment.baseUrl + 'deals', { params, observe: 'response' }),
      this.storeService.getStores()
    ]).pipe(
      map(([resp, stores]) => {
        const deals = this._updateDealStoreNames(resp.body as any, stores);
        this._saveToLocalStorage(deals)

        return { ...resp, body: deals }
      }),
      map(resp => {
        return { totalItems: +resp.headers.get('X-Total-Page-Count'), items: resp.body }
      }),

    )
  }

  _updateDealStoreNames(deals: Deal[], stores: Store[]) {
    return deals.map((deal: Deal) => {
      const store = stores.find(store => store.storeID === deal.storeID);
      return { ...deal, storeName: store.storeName }
    })
  }

  _saveToLocalStorage(deals: Deal[]) {
    const storedDeals = JSON.parse(localStorage.getItem('deals')) || []
    const newDeals = uniqBy([...storedDeals, ...deals], 'dealID')
    localStorage.setItem('deals', JSON.stringify(newDeals))
  }
}
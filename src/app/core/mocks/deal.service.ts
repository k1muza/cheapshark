import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { deals } from './data'
import { Deal } from '../models/deal';
import { APIResponse } from '../models/api-response';
import { DealQueryParams } from '../models/deal-query-params';

@Injectable({
  providedIn: 'root'
})
export class MockDealService {

  constructor() { }

  getDeals(args: DealQueryParams): Observable<APIResponse> {
    let { pageNumber, pageSize, onSale, title } = args

    // let results = JSON.parse(localStorage.get('deals')) as Deal[]
    let results = deals;

    if (onSale)
      results = results.filter(deal => deal.isOnSale == '1')

    if (title)
      results = results.filter(deal => deal.title.toLowerCase().includes(title.toLowerCase()))

    const totalItems = results.length

    pageNumber = +pageNumber || 1
    pageSize = +pageSize || 6

    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;

    results = results.slice(start, end)

    return of({ totalItems, items: results }).pipe(
      delay(3000)
    )
  }

  getDeal(dealID: string): Observable<Deal> {
    return of(deals.find(deal => deal.dealID == dealID))
  }

  getDealsByGame(gameID: string): Observable<APIResponse> {
    const result = deals.filter(deal => deal.gameID == gameID)
    return of({ totalItems: result.length, items: result }).pipe(
      delay(3000)
    )
  }

  getStoreDealCounts(storeID: string): Observable<number> {
    const _deals = deals.filter(deal => deal.storeID === storeID)
    return of(_deals.length)
  }
}

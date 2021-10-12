import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Store } from '../models/store';

/**
 * Assumption made here was stores do not change often. Only their deals change
 * 
 * The store service fetches all stores only on first call and saves them to both localStorage and memory
 * On subsequent calls in-memory stores are returned, if page refreshed then localStorage stores are returned
 */
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stores: Store[];

  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    if (this.stores && this.stores.length)
      return of(this.stores)

    this.stores = JSON.parse(localStorage.getItem('stores')) || []
    if (this.stores.length)
      return of(this.stores)

    return this.http.get(environment.baseUrl + 'stores').pipe(
      tap((stores: any) => {
        this.stores = stores
        localStorage.setItem('stores', JSON.stringify(stores))
      })
    ) as Observable<Store[]>
  }

  getStore(storeID: string): Observable<Store> {
    return this.getStores().pipe(
      map(stores => stores.find((store: Store) => store.storeID === storeID))
    )
  }

  getStoreByName(name: string) {
    return this.getStores().pipe(
      map(stores => stores.filter(store => {
        return name ? store.storeName.toLowerCase().includes(name.toLowerCase()) : stores
      })),
    )
  }
}

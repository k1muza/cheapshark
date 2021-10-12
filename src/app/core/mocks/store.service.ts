import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { stores } from './data';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class MockStoreService {

  constructor() { }

  getStores(): Observable<Store[]> {
    return of(stores)
  }

  getStore(storeID: string): Observable<Store> {
    return of(stores.find(store => store.storeID == storeID))
  }

  getStoreByName(name: string) {
    return of(stores.filter(store => store.storeName.toLowerCase().includes(name.toLowerCase())))
  }
}

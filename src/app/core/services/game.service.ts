import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { GameResponse } from '../models/game-response';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private storeService: StoreService,) { }

  getGame(id: string): Observable<GameResponse> {

    let httpParams = new HttpParams().set('id', id)

    return combineLatest([
      this.http.get(environment.baseUrl + 'games', { params: httpParams }),
      this.storeService.getStores()
    ]).pipe(
      map(([gameResponse, stores]) => {
        const deals = (gameResponse as any).deals.map((deal: any) => {
          const store = stores.find(st => st.storeID === deal.storeID);
          return { ...deal, storeName: store.storeName }
        })

        return { ...gameResponse, deals }
      })
    ) as Observable<GameResponse>
  }
}

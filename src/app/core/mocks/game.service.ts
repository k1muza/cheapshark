import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { games } from './data';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class MockGameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(games)
  }
}

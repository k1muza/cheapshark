import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { StoreService } from './store.service';

describe('GameService', () => {
  let service: GameService;
  let httpClientSpy: { get: jasmine.Spy }
  let storeServiceSpy: jasmine.SpyObj<StoreService>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    storeServiceSpy = jasmine.createSpyObj('StoreService', ['get'])
    service = new GameService(<any>httpClientSpy, <any>storeServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

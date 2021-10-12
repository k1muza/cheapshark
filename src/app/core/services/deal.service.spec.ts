import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DealService } from './deal.service';
import { StoreService } from './store.service';

describe('DealService', () => {
  let service: DealService;
  let httpClientSpy: { get: jasmine.Spy }
  let storeServiceSpy: jasmine.SpyObj<StoreService>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    storeServiceSpy = jasmine.createSpyObj('StoreService', ['get'])
    TestBed.configureTestingModule({
      providers: [
        DealService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: StoreService, useValue: storeServiceSpy },
      ]
    });
    service = TestBed.inject(DealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

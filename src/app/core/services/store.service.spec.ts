import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    console.log(httpClientSpy)
    TestBed.configureTestingModule({
      providers: [
        StoreService,
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

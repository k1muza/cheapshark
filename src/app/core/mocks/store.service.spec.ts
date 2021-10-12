import { TestBed } from '@angular/core/testing';

import { MockStoreService } from './store.service';

describe('StoreService', () => {
  let service: MockStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

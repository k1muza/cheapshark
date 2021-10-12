import { TestBed } from '@angular/core/testing';

import { MockDealService } from './deal.service';

describe('DealService', () => {
  let service: MockDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDealService } from 'src/app/core/mocks/deal.service';
import { DealService } from 'src/app/core/services/deal.service';
import { stores } from '../../../../core/mocks/data'

import { StoreCardComponent } from './store-card.component';

describe('StoreCardComponent', () => {
  let component: StoreCardComponent;
  let fixture: ComponentFixture<StoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreCardComponent],
      providers: [
        { provide: DealService, useValue: new MockDealService() },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCardComponent);
    component = fixture.componentInstance;
    component.store = stores[0]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

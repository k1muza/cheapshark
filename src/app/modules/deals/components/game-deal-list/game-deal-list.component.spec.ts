import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockDealService } from 'src/app/core/mocks/deal.service';
import { DealService } from 'src/app/core/services/deal.service';

import { GameDealListComponent } from './game-deal-list.component';

describe('GameDealListComponent', () => {
  let component: GameDealListComponent;
  let fixture: ComponentFixture<GameDealListComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameDealListComponent],
      providers: [
        { provide: DealService, useValue: new MockDealService() },
        { provide: Router, useValue: routerSpy },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`initial 'deals' to be undefined`, () => {
    expect(component.deals).toBeUndefined();
  });

  it(`initial 'loading' to be false`, () => {
    expect(component.loading).toBeFalsy();
  })

  it(`initial 'error' to be undefined`, () => {
    expect(component.error).toBeFalsy();
  })

  it('should load deals after 4 seconds', fakeAsync(() => {
    fixture.detectChanges();
    component.ngOnInit()
    tick(4000);
    fixture.detectChanges();
    expect(component.deals).toBeTruthy();
    flush();
  }));
});

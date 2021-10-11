import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDealListComponent } from './game-deal-list.component';

describe('GameDealListComponent', () => {
  let component: GameDealListComponent;
  let fixture: ComponentFixture<GameDealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDealListComponent ]
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

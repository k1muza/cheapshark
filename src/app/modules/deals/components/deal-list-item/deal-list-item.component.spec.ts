import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealListItemComponent } from './deal-list-item.component';

describe('DealListItemComponent', () => {
  let component: DealListItemComponent;
  let fixture: ComponentFixture<DealListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

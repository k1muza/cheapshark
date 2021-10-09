import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealSearchComponent } from './deal-search.component';

describe('DealSearchComponent', () => {
  let component: DealSearchComponent;
  let fixture: ComponentFixture<DealSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

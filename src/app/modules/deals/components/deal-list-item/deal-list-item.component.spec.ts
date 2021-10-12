import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDealService } from 'src/app/core/mocks/deal.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { DealListItemComponent } from './deal-list-item.component';

describe('DealListItemComponent', () => {
  let component: DealListItemComponent;
  let fixture: ComponentFixture<DealListItemComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealListItemComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListItemComponent);
    component = fixture.componentInstance;
    component.deal = { title: 'Deus Ex: Human Revolution - Director\'s Cut', dealID: 'HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D' }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { deals } from 'src/app/core/mocks/data';

import { MockDealService } from 'src/app/core/mocks/deal.service';
import { DealService } from 'src/app/core/services/deal.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { DealListComponent } from './deal-list.component';

describe('DealListComponent', () => {
  let component: DealListComponent;
  let fixture: ComponentFixture<DealListComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedRouteSpy = new ActivatedRouteStub()
  const dealServiceSpy = new MockDealService()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealListComponent],
      providers: [
        { provide: DealService, useValue: dealServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`initial 'deals' to be undefined`, () => {
    expect(component.deals).toBeUndefined();
  });

  it(`initial 'loading' to be false`, () => {
    expect(component.loading).toBeFalse();
  })

  it(`initial 'error' to be undefined`, () => {
    expect(component.error).toBeUndefined();
  })

  it('it should not be loading if there is an error', () => {
    component.loading = true;
    component.error = 'Something bad happened...'
    expect(component.isLoading()).toBeFalsy();
  })

  it('it should not be empty if there is an error', () => {
    component.error = 'Something bad happened...'
    component.loading = false

    component.deals = []
    expect(component.isEmpty()).toBeFalsy();

    component.deals = null
    expect(component.isEmpty()).toBeFalsy();
  })

  it('it should be empty if not loading but deals are null', () => {
    component.error = ''
    component.loading = false

    component.deals = []
    expect(component.isEmpty()).toBeTruthy();

    component.deals = null
    expect(component.isEmpty()).toBeTruthy();
  })

  it('it should not be loaded if error or loading or empty', () => {
    component.error = ''
    component.loading = false
    component.deals = []

    expect(component.isLoaded()).toBeFalsy();

    component.error = 'Some error'
    component.loading = false
    component.deals = deals.slice(0, 6)

    expect(component.isLoaded()).toBeFalsy();

    component.error = ''
    component.loading = true
    component.deals = deals.slice(0, 6)

    expect(component.isLoaded()).toBeFalsy();
  })

  it('should be loaded if not error and not loading but with deals', () => {
    component.error = ''
    component.loading = false
    component.deals = deals.slice(0, 6)

    expect(component.isLoaded()).toBeTruthy();
  })

  it('should load deals after 4 seconds', fakeAsync(() => {
    component.deals = null
    fixture.detectChanges();
    component.ngOnInit()
    tick(4000);
    fixture.detectChanges();
    expect(component.deals.length).toBe(6);
    flush();
  }));
});

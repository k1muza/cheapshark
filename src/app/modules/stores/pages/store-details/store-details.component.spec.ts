import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MockStoreService } from 'src/app/core/mocks/store.service';
import { StoreService } from 'src/app/core/services/store.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { StoreDetailsComponent } from './store-details.component';

describe('StoreDetailsComponent', () => {
  let component: StoreDetailsComponent;
  let fixture: ComponentFixture<StoreDetailsComponent>;
  const activateRouteSpy = new ActivatedRouteStub()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDetailsComponent],
      providers: [
        { provide: StoreService, useValue: new MockStoreService() },
        { provide: ActivatedRoute, useValue: activateRouteSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

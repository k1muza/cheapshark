import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { MockStoreService } from 'src/app/core/mocks/store.service';
import { StoreService } from 'src/app/core/services/store.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { StoreListComponent } from './store-list.component';

describe('StoreListComponent', () => {
  let component: StoreListComponent;
  let fixture: ComponentFixture<StoreListComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activateRouteSpy = new ActivatedRouteStub()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreListComponent],
      providers: [
        { provide: StoreService, useValue: new MockStoreService() },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activateRouteSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, first, switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { Store } from 'src/app/core/models/store';
import { StoreQueryParams } from 'src/app/core/models/store-query-params';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    storeName: new FormControl('')
  })

  get storeName() {
    return this.form.get('storeName')
  }

  stores: Store[];

  subSink = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService) { }

  ngOnInit(): void {

    this.form.patchValue(this.route.snapshot.queryParams)

    this.subSink.sink = this.route.queryParams.pipe(
      debounceTime(500),
      switchMap((params: StoreQueryParams) => this.storeService.getStoreByName(params.storeName))
    )
      .subscribe(stores => {
        this.stores = stores;
      })

    this.subSink.sink = this.storeName.valueChanges.subscribe(storeName => {
      this.router.navigate([], { queryParams: { storeName }, replaceUrl: true })
    })
  }

  trackByStoreID(_: number, store: Store) {
    return store.storeID
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}

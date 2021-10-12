import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store } from 'src/app/core/models/store';
import { StoreService } from 'src/app/core/services/store.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit, OnDestroy {

  store: Store;
  subSink = new SubSink();

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subSink.sink = this.route.params.pipe(
      switchMap(({ storeID }) => this.storeService.getStore(storeID))
    ).subscribe((store) => {
      this.store = store;
    })
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}

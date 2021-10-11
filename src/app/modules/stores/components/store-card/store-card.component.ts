import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Store } from 'src/app/core/models/store';
import { DealService } from 'src/app/core/services/deal.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit, OnDestroy {
  @Input() store: Store;

  totalDeals: number;

  subSink = new SubSink()

  constructor(private dealService: DealService) { }

  ngOnInit(): void {
    this.subSink.sink = this.dealService.getStoreDealCounts(this.store.storeID).subscribe(totalDeals => {
      this.totalDeals = totalDeals
    })
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe()
  }
}

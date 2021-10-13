import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Deal } from 'src/app/core/models/deal';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss']
})
export class DealDetailsComponent implements OnInit, OnDestroy {

  deal: Deal;
  otherGameDeals: any[];

  private subSink = new SubSink();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subSink.sink = this.getDealFromQuery().subscribe(deal => {
      this.deal = deal;
    })
  }

  getDealFromQuery() {
    return this.route.queryParams as Observable<Deal>
  }

  getSavings(): number {
    return +this.deal.normalPrice - +this.deal.salePrice
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe()
  }
}


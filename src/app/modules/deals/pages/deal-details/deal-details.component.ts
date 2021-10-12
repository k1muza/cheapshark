import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DealService } from 'src/app/core/services/deal.service';
import { Deal } from 'src/app/core/models/deal';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss']
})
export class DealDetailsComponent implements OnInit {

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
}


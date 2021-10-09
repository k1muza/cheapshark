import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DealService } from 'src/app/core/mocks/deal.service';
import { Deal } from 'src/app/core/models/deal';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss']
})
export class DealDetailsComponent implements OnInit {

  deal$: Observable<Deal>;

  constructor(private route: ActivatedRoute, private dealService: DealService) { }

  ngOnInit(): void {
    this.deal$ = this.route.params.pipe(
      switchMap(({ dealID }) => this.dealService.getDeal(dealID)),
    )
  }
}


import { Component, Input, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Deal } from 'src/app/core/models/deal';
import { DealService } from 'src/app/core/services/deal.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-game-deal-list',
  templateUrl: './game-deal-list.component.html',
  styleUrls: ['./game-deal-list.component.scss']
})
export class GameDealListComponent implements OnInit {
  @Input() title: string
  @Input() header: string

  deals: Deal[]
  subSink = new SubSink()

  public loading: boolean;
  public error: string;

  constructor(private dealService: DealService, private router: Router) { }

  ngOnInit(): void {
    this.subSink.sink = this.dealService.getDealsByGame(this.title).pipe(
      tap(() => this.loading = true),
      catchError(err => {
        this.error = err.message
        return of(null)
      }),
    ).subscribe((resp) => {

      if (resp) {
        this.deals = resp.items
        this.error = ''
      }

      this.loading = false
    })
  }

  onViewMore(deal: Deal) {
    // List of deal attributes needed in the deal detail page

    const attribs = ['title', 'normalPrice', 'salePrice', 'storeName', 'thumb', 'gameID']

    const queryParams: Params = {}
    attribs.forEach(attrib => {
      queryParams[attrib] = (deal as any)[attrib]
    })

    console.log(queryParams)

    this.router.navigate(['deals', 'details'], { queryParams })
  }

  trackByDealID(index: number, deal: Deal) {
    return deal.dealID
  }

  isError() {
    return this.error
  }

  isLoading() {
    return !this.isError && this.loading
  }

  isEmpty() {
    return !this.isError() && !this.isLoading && !this.deals.length
  }
}

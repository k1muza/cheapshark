import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { catchError, debounceTime, switchMap, tap } from 'rxjs/operators';

import { DealService } from 'src/app/core/mocks/deal.service';
import { Deal } from 'src/app/core/models/deal';
import { DealQueryParams } from 'src/app/core/models/deal-query-params';
import { forkJoin, merge, of } from 'rxjs';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss']
})
export class DealListComponent implements OnInit, OnDestroy {

  public deals: Deal[] = [];

  public loading: boolean;

  public error: string;

  public totalItems: number;

  form: FormGroup = new FormGroup({

    title: new FormControl(''),

    onSale: new FormControl(false),

    pageNumber: new FormControl(1),

    pageSize: new FormControl(6)

  });

  get title() {
    return this.form.get('title');
  }

  get onSale() {
    return this.form.get('onSale');
  }

  get pageSize() {
    return this.form.get('pageSize');
  }

  get pageNumber() {
    return this.form.get('pageNumber');
  }

  private subSink = new SubSink();

  constructor(private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    // Pre-fill form with query params in url

    this.form.patchValue(this.route.snapshot.queryParams)

    // Listen to changes in url query params (e.g. pageNumber, title etc) and fetch

    this.subSink.sink = this.route.queryParams.pipe(

      tap(() => this.loading = true),
      debounceTime(500),
      switchMap((params: DealQueryParams) => this.dealService.getDeals(params)),

      catchError(err => {
        this.error = err.message
        return of(null)
      })

    ).subscribe((resp) => {
      console.log(resp)
      if (resp) {
        const { items, totalItems } = resp

        this.totalItems = totalItems;
        this.deals = items
        this.error = ''
      }
      this.loading = false
    });

    // If either search or onSale filter is updated reset pageNumber to 1

    this.subSink.sink = this.title.valueChanges.subscribe(_ => {
      this.resetPage()
    })

    this.subSink.sink = this.onSale.valueChanges.subscribe(_ => {
      this.resetPage()
    })
  }

  // Update url query params from form values

  updateUrlParams() {

    const queryParams: Params = {}

    for (const key in this.form.value) {

      if (Object.prototype.hasOwnProperty.call(this.form.value, key)) {
        const element = this.form.value[key];
        if (element)
          queryParams[key] = element
      }
    }

    this.router.navigate([], { queryParams, replaceUrl: true })
  }

  updatePageNumber(pageNumber: number) {
    this.pageNumber.patchValue(+pageNumber);
    this.updateUrlParams()
  }

  resetPage() {
    this.pageNumber.patchValue(1);
    this.updateUrlParams()
  }

  // Used by ngFor to avoid rerendering the whole page on list changes

  trackByDealID(index: number, deal: Deal): string {
    return deal.dealID;
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

  // Tiding up before we leave 

  ngOnDestroy(): void {

    this.subSink.unsubscribe()

  }
}

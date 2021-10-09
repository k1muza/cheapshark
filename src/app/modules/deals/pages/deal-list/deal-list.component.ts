import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { first, switchMap } from 'rxjs/operators';

import { DealService } from 'src/app/core/mocks/deal.service';
import { Deal } from 'src/app/core/models/deal';
import { DealQueryParams } from 'src/app/core/models/deal-query-params';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss']
})
export class DealListComponent implements OnInit, OnDestroy {

  public deals: Deal[] = [];
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

  get pageNumber() {
    return this.form.get('pageNumber');
  }

  private subSink = new SubSink();

  constructor(private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    // Update form if user navigates to a pre-queried url

    this.subSink.sink = this.route.queryParams.pipe(first()).subscribe(params => {
      this.form.patchValue(params)
    })

    // Fetch only according to url query Params e.g. pageNumber, title etc

    this.subSink.sink = this.route.queryParams.pipe(
      switchMap((params: DealQueryParams) => {
        return this.dealService.getDeals(params)
      })
    ).subscribe(items => {
      if (this.pageNumber.value > 1)
        items.forEach((item) => {
          this.deals.push(item)
        })
      else
        this.deals = items
    });

    // If either search or onSale filter is updated reset pageNumber to 1

    this.subSink.sink = combineLatest([
      this.title.valueChanges,
      this.onSale.valueChanges
    ]).subscribe(_ => {
      this.resetPage()
    })
  }

  // Update url query params from form values

  updateUrlParams() {
    const formValues = this.form.value;
    const queryParams: Params = {}

    for (const key in formValues) {
      if (Object.prototype.hasOwnProperty.call(formValues, key)) {
        const element = formValues[key];
        if (element)
          queryParams[key] = element
      }
    }

    this.router.navigate([], { queryParams, replaceUrl: true },)
  }

  addPage() {
    this.pageNumber.patchValue(parseInt(this.pageNumber.value) + 1);
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

  ngOnDestroy(): void {
    this.subSink.unsubscribe()
  }
}

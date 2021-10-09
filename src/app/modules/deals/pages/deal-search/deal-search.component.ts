import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { DealService } from 'src/app/core/mocks/deal.service';
import { Deal } from 'src/app/core/models/deal';

@Component({
  selector: 'app-deal-search',
  templateUrl: './deal-search.component.html',
  styleUrls: ['./deal-search.component.scss']
})
export class DealSearchComponent implements OnInit {

  public deals: Deal[] = [];
  form: FormGroup = new FormGroup({
    searchQuery: new FormControl('')
  });

  private subSink = new SubSink();

  page$ = new BehaviorSubject({ page: 1, pageSize: 9 });

  get searchQuery() {
    return this.form.get('searchQuery')
  }

  constructor(private dealService: DealService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subSink.sink = this.searchQuery.valueChanges.pipe(debounceTime(500)).subscribe(query => {
      this.router.navigate(['deals', 'search'], { queryParams: { query } })
    })
    // this.subSink.sink = this.searchQuery.valueChanges.pipe(
    //   debounceTime(500),
    //   switchMap(query => this.dealService.getDealsByName(query, 1, 12))
    // ).subscribe(data => {
    //   this.deals = data;
    // })

    this.subSink.sink = this.route.queryParams.subscribe(({ query }) => {
      console.log(query)
      this.searchQuery.patchValue(query)
    })
  }

  loadMore() {
    const { page, pageSize } = this.page$.value;
    this.page$.next({ page: page + 1, pageSize: pageSize })
  }

  trackByDealID(index: number, deal: Deal): string {
    return deal.dealID;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe()
  }
}

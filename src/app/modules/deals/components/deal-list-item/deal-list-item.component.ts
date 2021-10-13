import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { Deal } from 'src/app/core/models/deal';

@Component({
  selector: 'app-deal-list-item',
  templateUrl: './deal-list-item.component.html',
  styleUrls: ['./deal-list-item.component.scss']
})
export class DealListItemComponent implements OnInit {
  @Input() deal: Deal;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewMore() {
    // List of deal attributes needed in the deal detail page

    const attribs = ['title', 'normalPrice', 'salePrice', 'storeName', 'thumb', 'gameID']

    const queryParams: Params = {}
    attribs.forEach(attrib => {
      queryParams[attrib] = (<any>this.deal)[attrib]
    })

    this.router.navigate(['deals', 'details'], { queryParams })
  }
}

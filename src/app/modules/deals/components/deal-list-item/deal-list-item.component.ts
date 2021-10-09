import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/core/models/deal';

@Component({
  selector: 'app-deal-list-item',
  templateUrl: './deal-list-item.component.html',
  styleUrls: ['./deal-list-item.component.scss']
})
export class DealListItemComponent implements OnInit {
  @Input() deal: Deal;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  @Input() normalPrice: string;
  @Input() salePrice: string;

  constructor() { }

  ngOnInit(): void {
  }

  hasSalePrice() {
    return this.normalPrice && this.salePrice && (this.normalPrice !== this.salePrice)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PricesComponent } from './components/prices/prices.component';



@NgModule({
  declarations: [
    PaginationComponent,
    PricesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PricesComponent
  ]
})
export class SharedModule { }

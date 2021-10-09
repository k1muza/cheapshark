import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DealsRoutingModule } from './deals-routing.module';
import { DealListItemComponent } from './components/deal-list-item/deal-list-item.component';
import { DealListComponent } from './pages/deal-list/deal-list.component';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DealSearchComponent } from './pages/deal-search/deal-search.component';
import { DealFiltersComponent } from './components/deal-filters/deal-filters.component';


@NgModule({
  declarations: [
    DealListComponent,
    DealDetailsComponent,
    DealListItemComponent,
    DealSearchComponent,
    DealFiltersComponent,
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class DealsModule { }

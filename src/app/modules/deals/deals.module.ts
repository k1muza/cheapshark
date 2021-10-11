import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DealsRoutingModule } from './deals-routing.module';
import { DealListItemComponent } from './components/deal-list-item/deal-list-item.component';
import { DealListComponent } from './pages/deal-list/deal-list.component';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import { DealFiltersComponent } from './components/deal-filters/deal-filters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameDealListComponent } from './components/game-deal-list/game-deal-list.component';


@NgModule({
  declarations: [
    DealListComponent,
    DealDetailsComponent,
    DealListItemComponent,
    DealFiltersComponent,
    GameDealListComponent,
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
})
export class DealsModule { }

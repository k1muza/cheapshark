import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoresRoutingModule } from './stores-routing.module';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { StoreDetailsComponent } from './pages/store-details/store-details.component';
import { StoreCardComponent } from './components/store-card/store-card.component';


@NgModule({
  declarations: [
    StoreDetailsComponent,
    StoreListComponent,
    StoreCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }

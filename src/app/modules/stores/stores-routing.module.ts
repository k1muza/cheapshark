import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDetailsComponent } from './pages/store-details/store-details.component';
import { StoreListComponent } from './pages/store-list/store-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: StoreListComponent,
  },
  {
    path: 'details/:storeID',
    component: StoreDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }

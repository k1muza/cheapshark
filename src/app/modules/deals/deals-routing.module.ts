import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import { DealListComponent } from './pages/deal-list/deal-list.component';
import { DealSearchComponent } from './pages/deal-search/deal-search.component';


const routes: Routes = [
  {
    path: 'list',
    component: DealListComponent
  },
  {
    path: 'details/:dealID',
    component: DealDetailsComponent
  },
  {
    path: 'search',
    component: DealSearchComponent
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
export class DealsRoutingModule { }

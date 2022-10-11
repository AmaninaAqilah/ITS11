import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { USearchPage } from './u-search.page';

const routes: Routes = [
  {
    path: '',
    component: USearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class USearchPageRoutingModule {}

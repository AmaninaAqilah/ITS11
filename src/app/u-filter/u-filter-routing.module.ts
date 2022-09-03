import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UFilterPage } from './u-filter.page';

const routes: Routes = [
  {
    path: '',
    component: UFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UFilterPageRoutingModule {}

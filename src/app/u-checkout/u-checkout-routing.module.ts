import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UCheckoutPage } from './u-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: UCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UCheckoutPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VLoginPage } from './v-login.page';

const routes: Routes = [
  {
    path: '',
    component: VLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VLoginPageRoutingModule {}

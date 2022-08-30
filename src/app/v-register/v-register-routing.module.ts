import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VRegisterPage } from './v-register.page';

const routes: Routes = [
  {
    path: '',
    component: VRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VRegisterPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VEditprofPage } from './v-editprof.page';

const routes: Routes = [
  {
    path: '',
    component: VEditprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VEditprofPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VHomePage } from './v-home.page';

const routes: Routes = [
  {
    path: '',
    component: VHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VHomePageRoutingModule {}

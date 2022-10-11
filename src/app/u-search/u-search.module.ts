import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { USearchPageRoutingModule } from './u-search-routing.module';

import { USearchPage } from './u-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    USearchPageRoutingModule
  ],
  declarations: [USearchPage]
})
export class USearchPageModule {}

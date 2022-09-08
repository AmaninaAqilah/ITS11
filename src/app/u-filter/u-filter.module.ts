import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UFilterPageRoutingModule } from './u-filter-routing.module';

import { UFilterPage } from './u-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UFilterPageRoutingModule
  ],
  declarations: [UFilterPage]
})
export class UFilterPageModule {}

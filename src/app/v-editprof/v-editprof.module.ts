import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VEditprofPageRoutingModule } from './v-editprof-routing.module';

import { VEditprofPage } from './v-editprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VEditprofPageRoutingModule
  ],
  declarations: [VEditprofPage]
})
export class VEditprofPageModule {}

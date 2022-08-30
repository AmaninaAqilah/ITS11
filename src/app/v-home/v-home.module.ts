import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VHomePageRoutingModule } from './v-home-routing.module';

import { VHomePage } from './v-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VHomePageRoutingModule
  ],
  declarations: [VHomePage]
})
export class VHomePageModule {}

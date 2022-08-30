import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VProfilePageRoutingModule } from './v-profile-routing.module';

import { VProfilePage } from './v-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VProfilePageRoutingModule
  ],
  declarations: [VProfilePage]
})
export class VProfilePageModule {}

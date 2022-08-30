import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VRegisterPageRoutingModule } from './v-register-routing.module';

import { VRegisterPage } from './v-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VRegisterPageRoutingModule
  ],
  declarations: [VRegisterPage]
})
export class VRegisterPageModule {}

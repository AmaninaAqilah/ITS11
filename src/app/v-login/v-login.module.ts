import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VLoginPageRoutingModule } from './v-login-routing.module';

import { VLoginPage } from './v-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VLoginPageRoutingModule
  ],
  declarations: [VLoginPage]
})
export class VLoginPageModule {}

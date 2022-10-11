import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRegisterPageRoutingModule } from './admin-register-routing.module';

import { AdminRegisterPage } from './admin-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRegisterPageRoutingModule
  ],
  declarations: [AdminRegisterPage]
})
export class AdminRegisterPageModule {}

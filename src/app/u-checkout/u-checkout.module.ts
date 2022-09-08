import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UCheckoutPageRoutingModule } from './u-checkout-routing.module';

import { UCheckoutPage } from './u-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UCheckoutPageRoutingModule
  ],
  declarations: [UCheckoutPage]
})
export class UCheckoutPageModule {}

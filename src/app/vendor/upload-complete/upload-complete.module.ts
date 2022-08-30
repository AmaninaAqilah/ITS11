import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadCompletePageRoutingModule } from './upload-complete-routing.module';

import { UploadCompletePage } from './upload-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadCompletePageRoutingModule
  ],
  declarations: [UploadCompletePage]
})
export class UploadCompletePageModule {}

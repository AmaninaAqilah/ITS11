import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VCommentPageRoutingModule } from './v-comment-routing.module';

import { VCommentPage } from './v-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VCommentPageRoutingModule
  ],
  declarations: [VCommentPage]
})
export class VCommentPageModule {}

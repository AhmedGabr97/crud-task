
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpersonPageRoutingModule } from './viewperson-routing.module';

import { ViewpersonPage } from './viewperson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpersonPageRoutingModule
  ],
  declarations: [ViewpersonPage ]
})
export class ViewpersonPageModule {}

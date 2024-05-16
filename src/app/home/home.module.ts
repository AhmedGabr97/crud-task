import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgIf
  ],
  declarations: [HomePage , CardComponent  ]
})
export class HomePageModule {}

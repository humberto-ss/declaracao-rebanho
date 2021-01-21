import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclaracaoPageRoutingModule } from './declaracao-routing.module';

import { DeclaracaoPage } from './declaracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclaracaoPageRoutingModule
  ],
  declarations: [DeclaracaoPage]
})
export class DeclaracaoPageModule {}

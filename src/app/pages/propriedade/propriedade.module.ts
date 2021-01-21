import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropriedadePageRoutingModule } from './propriedade-routing.module';

import { PropriedadePage } from './propriedade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropriedadePageRoutingModule
  ],
  declarations: [PropriedadePage]
})
export class PropriedadePageModule {}

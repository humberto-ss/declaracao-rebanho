import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropriedadeRuralPageRoutingModule } from './propriedade-rural-routing.module';

import { PropriedadeRuralPage } from './propriedade-rural.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropriedadeRuralPageRoutingModule
  ],
  declarations: [PropriedadeRuralPage]
})
export class PropriedadeRuralPageModule {}

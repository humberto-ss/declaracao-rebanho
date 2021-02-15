import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropriedadePageRoutingModule } from './propriedade-routing.module';

import { PropriedadePage } from './propriedade.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropriedadePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PropriedadePage]
})
export class PropriedadePageModule {}

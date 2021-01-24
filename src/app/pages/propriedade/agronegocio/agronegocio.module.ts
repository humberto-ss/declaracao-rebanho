import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgronegocioPageRoutingModule } from './agronegocio-routing.module';

import { AgronegocioPage } from './agronegocio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgronegocioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgronegocioPage]
})
export class AgronegocioPageModule {}

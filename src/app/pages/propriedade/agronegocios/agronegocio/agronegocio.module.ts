import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgronegocioPageRoutingModule } from './agronegocio-routing.module';

import { AgronegocioPage } from './agronegocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgronegocioPageRoutingModule
  ],
  declarations: [AgronegocioPage]
})
export class AgronegocioPageModule {}

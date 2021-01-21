import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgronegociosPageRoutingModule } from './agronegocios-routing.module';

import { AgronegociosPage } from './agronegocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgronegociosPageRoutingModule
  ],
  declarations: [AgronegociosPage]
})
export class AgronegociosPageModule {}

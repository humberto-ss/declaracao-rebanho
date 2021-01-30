import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoLancamentoPageRoutingModule } from './novo-lancamento-routing.module';

import { NovoLancamentoPage } from './novo-lancamento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoLancamentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NovoLancamentoPage]
})
export class NovoLancamentoPageModule {}

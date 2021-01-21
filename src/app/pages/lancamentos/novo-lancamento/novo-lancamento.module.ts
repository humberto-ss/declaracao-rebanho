import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoLancamentoPageRoutingModule } from './novo-lancamento-routing.module';

import { NovoLancamentoPage } from './novo-lancamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoLancamentoPageRoutingModule
  ],
  declarations: [NovoLancamentoPage]
})
export class NovoLancamentoPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoLancamentoPage } from './novo-lancamento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoLancamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoLancamentoPageRoutingModule {}

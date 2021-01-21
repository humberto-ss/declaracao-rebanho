import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentosPage } from './lancamentos.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentosPage
  },
  {
    path: ':lancamentoId',
    loadChildren: () => import('./lancamento/lancamento.module').then( m => m.LancamentoPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./novo-lancamento/novo-lancamento.module').then( m => m.NovoLancamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosPageRoutingModule {}

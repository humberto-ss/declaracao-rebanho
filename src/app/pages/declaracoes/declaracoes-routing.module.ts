import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracoesPage } from './declaracoes.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracoesPage
  },
  {
    path: ':declaracaoId',
    loadChildren: () => import('./declaracao/declaracao.module').then( m => m.DeclaracaoPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./nova-declaracao/nova-declaracao.module').then( m => m.NovaDeclaracaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracoesPageRoutingModule {}

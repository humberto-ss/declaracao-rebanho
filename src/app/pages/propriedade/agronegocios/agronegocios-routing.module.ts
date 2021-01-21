import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgronegociosPage } from './agronegocios.page';

const routes: Routes = [
  {
    path: '',
    component: AgronegociosPage
  },
  {
    path: ':agronegocioId',
    loadChildren: () => import('./agronegocio/agronegocio.module').then( m => m.AgronegocioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgronegociosPageRoutingModule {}

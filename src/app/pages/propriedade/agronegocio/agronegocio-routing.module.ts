import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgronegocioPage } from './agronegocio.page';

const routes: Routes = [
  {
    path: '',
    component: AgronegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgronegocioPageRoutingModule {}

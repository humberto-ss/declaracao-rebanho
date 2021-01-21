import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaDeclaracaoPage } from './nova-declaracao.page';

const routes: Routes = [
  {
    path: '',
    component: NovaDeclaracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaDeclaracaoPageRoutingModule {}

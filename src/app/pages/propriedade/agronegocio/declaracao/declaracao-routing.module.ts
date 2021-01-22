import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracaoPage } from './declaracao.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracaoPageRoutingModule {}

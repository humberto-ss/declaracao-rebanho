import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropriedadeRuralPage } from './propriedade-rural.page';

const routes: Routes = [
  {
    path: '',
    component: PropriedadeRuralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropriedadeRuralPageRoutingModule {}

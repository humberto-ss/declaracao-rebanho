import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropriedadePage } from './propriedade.page';

const routes: Routes = [
  
    {
      path: '',
      component: PropriedadePage
    },
    {
      path: 'agronegocios',
      loadChildren: () => import('./agronegocios/agronegocios.module').then( m => m.AgronegociosPageModule)
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropriedadePageRoutingModule {}

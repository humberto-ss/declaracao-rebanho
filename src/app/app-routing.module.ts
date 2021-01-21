import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'pages/propriedade',
    pathMatch: 'full',
  },
  {
    path: 'pages/propriedade',
    loadChildren: () => import('./pages/propriedade/propriedade.module').then( m => m.PropriedadePageModule)
  },
  {
    path:'pages/declaracoes',
    loadChildren:() => import('./pages/declaracoes/declaracoes.module').then( m => m.DeclaracoesPageModule)
  },
  {
    path:'pages/lancamentos',
    loadChildren:() => import('./pages/lancamentos/lancamentos.module').then( m => m.LancamentosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

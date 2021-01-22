import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'propriedade',
    pathMatch: 'full'
  },
  {
    path:'propriedade',
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/propriedade/propriedade.module').then( m => m.PropriedadePageModule)
      },{
        path:'agronegocio',
        children:[
          {
            path:'',
            loadChildren: () => import('./pages/propriedade/agronegocio/agronegocio.module').then( m => m.AgronegocioPageModule)
          },{
            path:'lancamento',
            children:[
              {
                path:'novo',
                loadChildren: () => import('./pages/propriedade/agronegocio/lancamento/novo-lancamento/novo-lancamento.module').then( m => m.NovoLancamentoPageModule)
              },{
                path:':lancamentoId',
                loadChildren: () => import('./pages/propriedade/agronegocio/lancamento/lancamento.module').then( m => m.LancamentoPageModule)
              },{
                path:'',
                redirectTo:'/propriedade/agronegocio',
                pathMatch:'full'
              }
            ]
          },{
            path:'declaracao',
            children:[
              {
                path:'novo',
                loadChildren: () => import('./pages/propriedade/agronegocio/declaracao/nova-declaracao/nova-declaracao.module').then( m => m.NovaDeclaracaoPageModule)
              },{
                path:':declaracaoId',
                loadChildren: () => import('./pages/propriedade/agronegocio/declaracao/declaracao.module').then( m => m.DeclaracaoPageModule)
              },{
                path:'',
                redirectTo:'/propriedade/agronegocio',
                pathMatch:'full'
              }
            ]
          }
        ]
        }
      ]
  }
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

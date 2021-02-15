import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
        , canLoad: [AuthGuard]
      },{
        path:'agronegocio',
        children:[
          {
            path:':agronegocioId',
            children:[{
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
                  redirectTo:'/propriedade',
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
                  redirectTo:'/propriedade',
                  pathMatch:'full'
                }
              ]
            }
          ]
          }
          ,{
            path:'',
            redirectTo:'/propriedade',
            pathMatch:'full'
          }
        ]
        }
      ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

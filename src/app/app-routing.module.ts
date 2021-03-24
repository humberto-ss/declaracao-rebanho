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
        path:'slides',
        loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule),
         canLoad: [AuthGuard]
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
              loadChildren: () => import('./pages/propriedade/agronegocio/lancamento/lancamento.module').then( m => m.LancamentoPageModule)
            },{
              path:'declaracao',
              loadChildren: () => import('./pages/propriedade/agronegocio/declaracao/declaracao.module').then( m => m.DeclaracaoPageModule)
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
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  }
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

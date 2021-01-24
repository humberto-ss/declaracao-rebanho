import { NgModule, Component } from '@angular/core';
import { PropriedadesRuraisComponent } from './propriedades-rurais/propriedades-rurais.component'
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgronegociosComponent } from './agronegocios/agronegocios.component';
import { RouterModule} from '@angular/router';


@NgModule({
  imports:[
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations:[
    PropriedadesRuraisComponent,
    AgronegociosComponent
  ],
  exports:[PropriedadesRuraisComponent,AgronegociosComponent]  
})
export class ComponentsModule{}
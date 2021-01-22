import { NgModule } from '@angular/core';
import { PropriedadesRuraisComponent } from './propriedades-rurais/propriedades-rurais.component'

@NgModule({
  declarations:[
    PropriedadesRuraisComponent
  ],
  exports:[PropriedadesRuraisComponent]  
})
export class ComponentsModule{}
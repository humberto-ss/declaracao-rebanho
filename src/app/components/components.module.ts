import { NgModule, Component } from '@angular/core';
import { PropriedadesRuraisComponent } from './propriedades-rurais/propriedades-rurais.component'
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    IonicModule,
    FormsModule,
    CommonModule
  ],
  declarations:[
    PropriedadesRuraisComponent,
  ],
  exports:[PropriedadesRuraisComponent]  
})
export class ComponentsModule{}
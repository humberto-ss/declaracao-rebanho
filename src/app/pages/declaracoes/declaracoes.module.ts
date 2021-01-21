import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclaracoesPageRoutingModule } from './declaracoes-routing.module';

import { DeclaracoesPage } from './declaracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclaracoesPageRoutingModule
  ],
  declarations: [DeclaracoesPage]
})
export class DeclaracoesPageModule {}

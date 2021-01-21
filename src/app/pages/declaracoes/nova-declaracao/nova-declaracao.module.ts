import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaDeclaracaoPageRoutingModule } from './nova-declaracao-routing.module';

import { NovaDeclaracaoPage } from './nova-declaracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaDeclaracaoPageRoutingModule
  ],
  declarations: [NovaDeclaracaoPage]
})
export class NovaDeclaracaoPageModule {}

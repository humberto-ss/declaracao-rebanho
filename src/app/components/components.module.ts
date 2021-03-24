import { NgModule, Component } from "@angular/core";
import { PropriedadesRuraisComponent } from "./propriedades-rurais/propriedades-rurais.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AgronegociosComponent } from "./agronegocios/agronegocios.component";
import { RouterModule } from "@angular/router";
import { LancamentosComponent } from "./lancamentos/lancamentos.component";
import { DeclaracoesComponent } from "./declaracoes/declaracoes.component";
import { TiposLancamentosComponent } from "./tipos-lancamentos/tipos-lancamentos.component";
import { TiposExploracaoComponent } from "./tipos-exploracao/tipos-exploracao.component";
import { AnimaisComponent } from "./animais/animais.component";
import { FinalidadesCriacaoComponent } from "./finalidades-criacao/finalidades-criacao.component";
import { ComprovanteComponent } from "./comprovante/comprovante.component";


@NgModule({
  imports: [IonicModule, FormsModule, CommonModule, RouterModule],
  declarations: [
    PropriedadesRuraisComponent,
    AgronegociosComponent,
    LancamentosComponent,
    DeclaracoesComponent,
    TiposLancamentosComponent,
    TiposExploracaoComponent,
    FinalidadesCriacaoComponent,
    AnimaisComponent,
    ComprovanteComponent
  ],
  exports: [
    PropriedadesRuraisComponent,
    AgronegociosComponent,
    LancamentosComponent,
    DeclaracoesComponent,
    TiposLancamentosComponent,
    TiposExploracaoComponent,
    FinalidadesCriacaoComponent,
    AnimaisComponent,
    ComprovanteComponent
  ],
})
export class ComponentsModule {}

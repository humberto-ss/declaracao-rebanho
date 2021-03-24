import { Component, OnInit } from '@angular/core';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { TipoEnvioEnum } from 'src/app/util/tipoEnvioEnum';
import { DeclaracaoModel } from './declaracao.model';

@Component({
  selector: 'app-declaracoes',
  templateUrl: './declaracoes.component.html',
  styleUrls: ['./declaracoes.component.scss'],
})
export class DeclaracoesComponent implements OnInit{
  declaracoes: DeclaracaoDTO[];

  constructor(private declaracaoService: DeclaracaoService) {

  }
  
  ngOnInit() {
    this.carregaDeclaracoes(); 
  }
  ionViewWillEnter(){
    // this.declaracaoService.obtemDeclaracoesPorAgronegocio().then(
    //   data=> this.declaracoes = data
    // );
    // // .then(data=> this.declaracoes = data)
    // this.declaracoes = this.declaracaoService.declaracoesPorAgronegocio
    // this.carregaDeclaracoes();
  }

  selectedDeclaracao(declaracao:DeclaracaoDTO){
    this.declaracaoService.declaracaoSelecionada = declaracao;
  }
  
  public get tipoEnvioEnum(): typeof TipoEnvioEnum {
    return TipoEnvioEnum; 
  }
  
  async carregaDeclaracoes(){
    await this.declaracaoService.getAllTipoExploracaoPorEspecieAnimal();
    await this.declaracaoService.getAllTipoFinalidadePorEspecieAnimal();
    this.declaracoes = await this.declaracaoService.obtemDeclaracoesPorAgronegocio();
    // .then(data=> this.declaracoes = data)
    // this.declaracoes = this.declaracaoService.declaracoesPorAgronegocio
  }
}

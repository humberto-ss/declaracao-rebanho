import { Component, OnInit } from '@angular/core';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { TipoFinalidadeDTO } from 'src/app/DTOs/tipoFinalidadeDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { TipoEnvioEnum } from 'src/app/util/tipoEnvioEnum';

@Component({
  selector: 'app-finalidades-criacao',
  templateUrl: './finalidades-criacao.component.html',
  styleUrls: ['./finalidades-criacao.component.scss'],
})
export class FinalidadesCriacaoComponent implements OnInit {

  tiposFinalidade: TipoFinalidadeDTO[]=[];
  tipoFinalidadeSelecionado:TipoFinalidadeDTO;
  declaracao:DeclaracaoDTO;

  constructor(private declaracaoService:DeclaracaoService) { 
    this.declaracao = null
  }

  ngOnInit() {
    this.tiposFinalidade = this.declaracaoService.tipoFinalidadeEspAnimal;
    this.tipoFinalidadeSelecionado = this.declaracaoService.tipoFinalidadeSelecionado;
    this.declaracao = this.declaracaoService.declaracaoSelecionada;
  }

  setTipoFinalidadeSelecionado(tipoFinalidade:TipoFinalidadeDTO){
    this.declaracaoService.tipoFinalidadeSelecionado = tipoFinalidade;
    if(this.declaracaoService.agronegocioSelecionado.especieAnimal.indRebanho==1)
      this.declaracaoService.changeStatus(false);
    else
      this.declaracaoService.changeStatus(true);
  }

  isDisabled():boolean{
    if(!this.declaracao || this.declaracao.tipoEnvio === TipoEnvioEnum.LOCAL)
      return false;
    
    return true;
  }
}

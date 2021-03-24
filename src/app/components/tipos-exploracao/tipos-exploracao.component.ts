import { Component, OnInit } from '@angular/core';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { TipoExploracaoDTO } from 'src/app/DTOs/tipoExploracaoDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { TipoEnvioEnum } from 'src/app/util/tipoEnvioEnum';
import { TipoExploracaoModel } from './tipo-exploracao.model';

@Component({
  selector: 'app-tipos-exploracao',
  templateUrl: './tipos-exploracao.component.html',
  styleUrls: ['./tipos-exploracao.component.scss'],
})
export class TiposExploracaoComponent implements OnInit {
  tiposExploracao: TipoExploracaoDTO[]=[];
  tipoExploracaoSelecionado:TipoExploracaoDTO;
  declaracao:DeclaracaoDTO;

  constructor(private declaracaoService:DeclaracaoService) { }

  ngOnInit() {
    this.tiposExploracao = this.declaracaoService.tipoExploracaoEspAnimal;
    this.tipoExploracaoSelecionado = this.declaracaoService.tipoExploracaoSelecionado;
    this.declaracao = this.declaracaoService.declaracaoSelecionada;
  }

  setTipoExploracaoSelecionado(tipoExploracao:TipoExploracaoDTO){
    this.declaracaoService.tipoExploracaoSelecionado = tipoExploracao;
    
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

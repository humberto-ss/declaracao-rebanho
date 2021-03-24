import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { AgronegocioDTO } from '../DTOs/agronegocioDTO';
import { PropriedadeRuralDTO } from '../DTOs/propriedadeRuralDTO';
import { TipoEnvioEnum } from '../util/tipoEnvioEnum';
import { ControllerService } from './controller.service';
import { DeclaracaoService } from './declaracao.service';
import { LancamentoService } from './lancamento.service';


@Injectable({
  providedIn: 'root'
})
export class AgronegocioService implements OnInit {
  private _agronegocios: AgronegocioDTO[];
  agronegociosPropriedade: AgronegocioDTO[] = [];
  private _agronegociosToComponent = new Subject<void>();
  private _agronegocioSelecionado: AgronegocioDTO;

  constructor(
    private controllerService: ControllerService
     ) {}

   ngOnInit(){}

   async obtemAgronegocios(){
     let temp:AgronegocioDTO[] =  await this.controllerService.getAllAgronegocios().toPromise()
     let arrayTemp = [];
     Object.values(temp).forEach((agro)=> arrayTemp.push(agro))
    return arrayTemp
   }

  async carregaAgronegocios(propriedadeSelecionada: PropriedadeRuralDTO){
    if(!this._agronegocios){      
      this._agronegocios = await this.obtemAgronegocios() as AgronegocioDTO[]
    }
    this.agronegociosPropriedade = this._agronegocios.filter(agro => {
      if(agro.idPropriedade === propriedadeSelecionada.id)
        return  agro.propriedadeRural = propriedadeSelecionada
      })
    
    this._agronegociosToComponent.next();
    this.populaEspeciePorAgronegocio()
  }

  private populaEspeciePorAgronegocio(){
    this.agronegociosPropriedade.forEach(value =>{
      value.especieAnimal = this.controllerService.especies.find(esp => esp.id === value.idEspecieAnimal);
    })
  }

  atualizaStatusAgronegocio(agronegocioAtualizado:AgronegocioDTO){
    if(this.agronegocioSelecionado.status === TipoEnvioEnum.SUCESSO)
      return

    this.agronegocios.find(agro  => {if(agro.id === agronegocioAtualizado.id) agro.status = agronegocioAtualizado.status})
    this.agronegociosPropriedade.find(agro  => {if(agro.id === agronegocioAtualizado.id) agro.status = agronegocioAtualizado.status})
    this.agronegocioSelecionado.status =  agronegocioAtualizado.status;
  
    this.controllerService.atualizaAgronegocio(agronegocioAtualizado).subscribe(()=>console.log("atualiza Agronegocio"));
  }
  getAgronegociosPorId(idAgronegocio: number){
    return this._agronegocios.find(agro=> agro.id ===idAgronegocio);
  }

  get agronegocioSelecionado(){
    return this._agronegocioSelecionado;
  }

  setAgronegocioSelecionado(agronegocioSelecionado: AgronegocioDTO){
   // this.lancamentoService.agronegocio = agronegocioSelecionado;
    // this.declaracaoService.agronegocioSelecionado = agronegocioSelecionado;
    this._agronegocioSelecionado = agronegocioSelecionado;
  }

  get agronegocios(){
    return [...this._agronegocios];
  }

  get agronegociosToComponent(){
    return this._agronegociosToComponent
  }
}

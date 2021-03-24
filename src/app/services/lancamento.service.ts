import { Injectable, OnInit } from '@angular/core';

import { AgronegocioDTO } from '../DTOs/agronegocioDTO';
import { LancamentosDTO } from '../DTOs/lancamentosDTO';
import { TipoLancamentoDTO } from '../DTOs/tipoLancamentoDTO';
import { AgronegocioService } from './agronegocio.service';
import { ControllerService } from './controller.service';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService implements OnInit {
  private _lancamentos: LancamentosDTO[];
  private _lancamentosPorAgronegocio: LancamentosDTO[];
  private _lancamentoSelecionado: LancamentosDTO;
  private _tiposLancamentos: TipoLancamentoDTO[];
  private _tipoLancamentoSelecionado: TipoLancamentoDTO;
  private _idAgronegocioAtual: number;
  agronegocio: AgronegocioDTO;
  private _isAlterado:boolean = false;
  private _isPodeEnviar:boolean = false;

  constructor(
    private controllerService:ControllerService,
    private agronegocioService: AgronegocioService
  ) { 
    console.log()
    this.populaTiposLancamentos();
    this.populaLancamentos();
  }

  ngOnInit(){
  }

  async populaLancamentos(){
    if(this._lancamentos)
      return

    this._lancamentos = await this.controllerService.getLancamentos()as LancamentosDTO[];
  }

  setAgronegocio(agronegocio: AgronegocioDTO){
     this.agronegocio = agronegocio;
  }

  async obtemLancamentosPorAgronegocio(){
    await this.populaLancamentos();
    this.setAgronegocio(this.agronegocioService.agronegocioSelecionado)

    if(!this.lancamentos || this.lancamentos.length<=0)    
      return 
    
    this.lancamentosPorAgronegocio =  this.lancamentos.filter(lanc => {
      if(lanc.idAgronegocio === this.agronegocio.id)
        return lanc 
    }).reverse()

    this.lancamentosPorAgronegocio.forEach( 
      data => {
        if(this.tiposLancamentos)
          data.tipoLancamento = this.tiposLancamentos.find(res => res.id === data.idTipoLancamento)
      })
    return this.lancamentosPorAgronegocio;
  }

  private async populaTiposLancamentos(){
     return this._tiposLancamentos = await this.controllerService.getTiposLancamento().toPromise();
  }

  salvar(lancamento:LancamentosDTO){
    let respostaSalvar = this.controllerService.salvarLancamento(lancamento);
    this.atualizaLancamentoResposta(respostaSalvar);
  }

  enviar(lancamento:LancamentosDTO){
    let respostaEnvio = this.controllerService.enviarLancamento(lancamento);
    this.atualizaLancamentoResposta(respostaEnvio);
  }

  private atualizaLancamentoResposta(res:Promise<any>){
    res.then(
       res=>{
       let resp = res as LancamentosDTO
        if(resp && resp.id){
          const indexLancAgro =  this.lancamentosPorAgronegocio.findIndex(lanc => lanc.id === resp.id)
          if(indexLancAgro >-1)
            this.lancamentosPorAgronegocio.splice(indexLancAgro,1)
          this.lancamentosPorAgronegocio.unshift(res);
  
          const indexLanc =  this.lancamentos.findIndex(lanc => lanc.id === resp.id)
          if(indexLanc >-1)
            this.lancamentos.splice(indexLanc,1)
          this.lancamentos.unshift(res);
        }
       }
    )   
  }

  get lancamentos(){
    return this._lancamentos;
  }

  get tiposLancamentos(){
    return this._tiposLancamentos;
  }

  get tipoLancamentoSelecionado():TipoLancamentoDTO{
    return this._tipoLancamentoSelecionado;
  }

  set tipoLancamentoSelecionado(selectedType:TipoLancamentoDTO){
    this._tipoLancamentoSelecionado = selectedType;
  }

  get lancamentosPorAgronegocio(){
    return this._lancamentosPorAgronegocio;
  }

  set lancamentosPorAgronegocio(lancamentos:LancamentosDTO[]){
    this._lancamentosPorAgronegocio = lancamentos
  }

  get lancamentoSelecionado(){
    return this._lancamentoSelecionado;
  }

  set lancamentoSelecionado(lancamento: LancamentosDTO){
    this._lancamentoSelecionado = lancamento;
  }

  get isAlterado():boolean {
    return this._isAlterado
  } 
  set isAlterado(alterado:boolean) {
    this._isAlterado = alterado
  } 
  get isPodeEnviar():boolean {
    return this._isPodeEnviar
  } 
  set isPodeEnviar(alterado:boolean) {
    this._isPodeEnviar = alterado
  } 
  changeStatus(change:boolean){
    this.isAlterado = change;
    this.isPodeEnviar = !change;
  }
}

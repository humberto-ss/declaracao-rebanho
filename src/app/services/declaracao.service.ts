import { Injectable, OnInit } from "@angular/core";
import * as moment from "moment";

import { AgronegocioDTO } from "../DTOs/agronegocioDTO";
import { DeclaracaoDTO } from "../DTOs/declaracaoDTO";
import { ControllerService } from "./controller.service";
import { TipoExploracaoDTO } from "../DTOs/tipoExploracaoDTO";
import { SubAgrupamento } from "../DTOs/subAgrupamentoDTO";
import { TipoEnvioEnum } from "../util/tipoEnvioEnum";
import { Util } from '../util/util';
import { LancamentoService } from "./lancamento.service";
import { LancamentosDTO } from "../DTOs/lancamentosDTO";
import { TipoFinalidadeDTO } from "../DTOs/tipoFinalidadeDTO";
import { AgronegocioService } from "./agronegocio.service";


@Injectable({
  providedIn: "root",
})
export class DeclaracaoService implements OnInit {
  private _tipoExploracaoEspAnimal: TipoExploracaoDTO[] = [];
  private _tipoExploracao: TipoExploracaoDTO[] = [];
  private _tipoExploracaoSelecionado: TipoExploracaoDTO;
  private _tipoFinalidadeEspAnimal: TipoFinalidadeDTO[] = [];
  private _tipoFinalidade: TipoFinalidadeDTO[] = [];
  private _tipoFinalidadeSelecionado: TipoFinalidadeDTO;
  private _declaracoes: DeclaracaoDTO[];
  private _declaracaoSelecionada:DeclaracaoDTO;
  declaracoesPorAgronegocio:DeclaracaoDTO[];
  private _agronegocioSelecionado: AgronegocioDTO;
  private _isAlterado:boolean = false;
  private _isPodeEnviar:boolean = false;
  util:Util;
  constructor(
    private controllerService: ControllerService,
    private lancamentoService:LancamentoService,
    private agronegocioService: AgronegocioService
  ) {
    this.util = new Util();
    this.populaDeclaracoes();
    this.getTiposExploracao();
    this.getAllTiposFinalidade();
  }

  ngOnInit() {
  }

  salvar(declaracao:DeclaracaoDTO){
    let resposta = this.controllerService.salvarDeclaracao(declaracao);
    this.atualizaDeclaracoesResposta(resposta);
  }

  enviar(declaracao:DeclaracaoDTO){
    let resposta = this.controllerService.enviarDeclaracao(declaracao);
    this.atualizaDeclaracoesResposta(resposta)
    
    
    if(declaracao.id){
      resposta.then(()=>
        this.controllerService.deleteDeclaracaoLocal(declaracao))
    }
    this.agronegocioSelecionado.status = TipoEnvioEnum.EM_ANALISE
    this.agronegocioService.atualizaStatusAgronegocio(this.agronegocioSelecionado);
  }

  private  atualizaDeclaracoesResposta(res:Promise<any>){
    res.then(
       res=>{
       let resp = res as DeclaracaoDTO
        if(resp && resp.id){
          const indexDeclaracao =  this.declaracoes.findIndex(decla => decla.id === resp.id)
          if(indexDeclaracao >-1)
            this.declaracoes.splice(indexDeclaracao,1)
          this.declaracoes.unshift(res);

          const indexDeclaracaoAgro =  this.declaracoesPorAgronegocio.findIndex(decla => decla.id === resp.id)
          if(indexDeclaracaoAgro >-1)
            this.declaracoesPorAgronegocio.splice(indexDeclaracaoAgro,1)
          this.declaracoesPorAgronegocio.unshift(res);
         
        }
       }
    )
  }

  async obtemDeclaracoesPorAgronegocio() {
    await this.populaDeclaracoes();
    this.agronegocioSelecionado = this.agronegocioService.agronegocioSelecionado

    if(!this._declaracoes && this._declaracoes.length<=0)
      return;

    this.declaracoesPorAgronegocio = this._declaracoes.filter(
      (declaracao) => {
        if(declaracao.idAgronegocio === this.agronegocioSelecionado.id)
          return declaracao
      }
    );
    await this.carregaTipos();
    
    return this.declaracoesPorAgronegocio

  }
  
  private async carregaTipos(){
    return this.declaracoesPorAgronegocio.forEach(
      declaracao=>{
        if(this.tipoExploracaoEspAnimal)
          declaracao.tipoExploracao = this.tipoExploracaoEspAnimal.find(tipo=>tipo.id === declaracao.idTipoExploracao)
        if(this.tipoFinalidadeEspAnimal)
          declaracao.tipoFinalidadeCriacao = this.tipoFinalidadeEspAnimal.find(tipo=>tipo.id === declaracao.idTipoFinalidadeCriacao)
      }
    );
  }

  async getQuantidadesParaDeclarar(){
    let subAgrupamentoPopulado:SubAgrupamento[] = this.getSubAgrupamentosZerados();
    let subAgrupamentoDeclaracao:SubAgrupamento[] = await this.getSubAgrupamentoUltimaDeclaracao();
    let ultimosLancamentos:LancamentosDTO[]= await this.getUltimosLancamentos();

    if(subAgrupamentoDeclaracao){
      subAgrupamentoPopulado.forEach((sub)=> {
          subAgrupamentoDeclaracao.forEach(
            (decla) => {
              if(decla.idSubAgrupamento === sub.idSubAgrupamento)
                sub.quantidade = decla.quantidade
            }
          )
      }) 
    }

    if(ultimosLancamentos){
      ultimosLancamentos
      .forEach(lancamento=>{
          lancamento.subAgrupamento
          .forEach(sub=>{
              subAgrupamentoPopulado
              .forEach(populado=>{
                if(sub.idSubAgrupamento === populado.idSubAgrupamento){
                  if(lancamento.tipoLancamento.tpOperacao==='C')
                    populado.quantidade += sub.quantidade
                  else
                    populado.quantidade -= sub.quantidade
                }
              })
            })
        })
    }
    return subAgrupamentoPopulado;
  }

  getSubAgrupamentosZerados(){
    let subAgrupamento:SubAgrupamento[]=[]
    this.controllerService.getAgrupamentosZeradoPorEspecie(this.agronegocioSelecionado.idEspecieAnimal)
    .forEach(agrupamento=>agrupamento.subAgrupamento
      .forEach(sub=> subAgrupamento.push(sub)
      )
    )
   return subAgrupamento 
  }

  private  async getUltimosLancamentos(){
    let lancamentos = await this.lancamentoService.obtemLancamentosPorAgronegocio();
    return lancamentos.filter(
      lanc=> moment(lanc.dtLancamento, 'DD/MM/YYYY')
      .toDate()>=this.util.getFirstDateOfLastYear() 
      && lanc.tipoEnvio === TipoEnvioEnum.SUCESSO
    )
  }

  private async getSubAgrupamentoUltimaDeclaracao(){
    let dtSearch = this.util.getFirstDateOfLastYear()
    let ultimaDeclaracao:SubAgrupamento[];
    //  await this.obtemDeclaracoesPorAgronegocio().then(
    //   (res)=>
    //   res.find((declaracao)=>{
    //     if(declaracao.tipoEnvio === TipoEnvioEnum.SUCESSO && declaracao.dtEnvio){
    //      let data:Date = moment(declaracao.dtDeclaracao,'DD/MM/YYYY').toDate()
    //      if(data >= dtSearch)
    //       ultimaDeclaracao = declaracao.subAgrupamento
    //     }
    //   })
    // )
    if(!this.declaracoesPorAgronegocio)
      await this.obtemDeclaracoesPorAgronegocio()

    this.declaracoesPorAgronegocio.find((declaracao)=>{
      if(declaracao.tipoEnvio === TipoEnvioEnum.SUCESSO && declaracao.dtEnvio){
       let data:Date = moment(declaracao.dtDeclaracao,'DD/MM/YYYY').toDate()
       if(data >= dtSearch)
        ultimaDeclaracao = declaracao.subAgrupamento
      }
    })
    
      return ultimaDeclaracao;
  }

  async getAllTipoExploracaoPorEspecieAnimal() {
    this.agronegocioSelecionado = this.agronegocioService.agronegocioSelecionado
    if(this._tipoExploracao.length<=0)
      await this.getTiposExploracao(); 
    
    this._tipoExploracaoEspAnimal = [];
    for (let tipo of this._tipoExploracao) {
      if (tipo.idEspecieAnimal === this.agronegocioSelecionado.especieAnimal.id)
        this._tipoExploracaoEspAnimal.push(tipo);
    }
  }

  getTipoExploracaoPorDeclaracao(declaracao:DeclaracaoDTO): TipoExploracaoDTO{
    if(this.tipoExploracao.length>0){
      return this.tipoExploracao.find(tipo=> tipo.id===declaracao.idTipoExploracao);
    }
    return null
  }

  async getAllTipoFinalidadePorEspecieAnimal() {
    this.agronegocioSelecionado = this.agronegocioService.agronegocioSelecionado
    if(this._tipoFinalidade.length<=0)
      await this.getAllTiposFinalidade(); 
    
    this._tipoFinalidadeEspAnimal = [];
    for (let tipo of this._tipoFinalidade) {
      if (tipo.idEspecieAnimal === this.agronegocioSelecionado.especieAnimal.id)
        this._tipoFinalidadeEspAnimal.push(tipo);
    }
  }

  getTipoFinalidadePorDeclaracao(declaracao:DeclaracaoDTO): TipoFinalidadeDTO{
    if(this.tipoFinalidade.length>0){
      return this.tipoFinalidade.find(tipo=> tipo.id===declaracao.idTipoFinalidadeCriacao);
    }
    return null
  }

  async populaDeclaracoes() {
    if(this._declaracoes)
      return
      
    this._declaracoes = await this.controllerService.getAllDeclaracoes() as DeclaracaoDTO[];
  }

  private async getTiposExploracao() {
    this._tipoExploracao =  await this.controllerService.getTiposExploracao().toPromise();
  }
  private async getAllTiposFinalidade() {
    this._tipoFinalidade =  await this.controllerService.getTiposFinalidade().toPromise();
  }

  get declaracaoSelecionada(){
    return this._declaracaoSelecionada;
  }
  set declaracaoSelecionada(declaracao:DeclaracaoDTO){
    this._declaracaoSelecionada = declaracao;
  }
  get agronegocioSelecionado(){
    return this._agronegocioSelecionado
  }

  set agronegocioSelecionado(agronegocio:AgronegocioDTO){
    this._agronegocioSelecionado = agronegocio
  }

  get tipoExploracao() {
    return this._tipoExploracao;
  }

  get tipoExploracaoEspAnimal() {
    return this._tipoExploracaoEspAnimal;
  }

  get tipoExploracaoSelecionado(){
    return this._tipoExploracaoSelecionado;
  }
  
  set tipoExploracaoSelecionado(tipoExploracao:TipoExploracaoDTO){
     this._tipoExploracaoSelecionado = tipoExploracao;
  }

  get tipoFinalidade() {
    return this._tipoFinalidade;
  }

  get tipoFinalidadeEspAnimal() {
    return this._tipoFinalidadeEspAnimal;
  }

  get tipoFinalidadeSelecionado(){
    return this._tipoFinalidadeSelecionado;
  }
  
  set tipoFinalidadeSelecionado(tipoFinalidade:TipoFinalidadeDTO){
     this._tipoFinalidadeSelecionado = tipoFinalidade;
  }

  get declaracoes() {
    return this._declaracoes;
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

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";

import { Observable, concat, of, throwError } from "rxjs";
import { map } from "rxjs/operators";

import { AgronegocioDTO } from "../DTOs/agronegocioDTO";
import { PropriedadeRuralDTO } from "../DTOs/propriedadeRuralDTO";
import { OnlineOfflineService } from "./online-offline.service";
import { EspecieAnimalDTO } from "../DTOs/especieAnimalDTO";
import { AgrupamentoDTO } from "../DTOs/agrupamentoDTO";
import { TipoLancamentoDTO } from "../DTOs/tipoLancamentoDTO";
import { TipoFinalidadeDTO } from "../DTOs/tipoFinalidadeDTO";
import { TipoExploracaoDTO } from "../DTOs/tipoExploracaoDTO";
import { LancamentosDTO } from "../DTOs/lancamentosDTO";
import { Util } from "../util/util";
import { TipoEnvioEnum } from "../util/tipoEnvioEnum";
import { DataBaseService } from "./data-base.service";
import { LocalBaseService } from "./local-base.service";
import { DeclaracaoDTO } from "../DTOs/declaracaoDTO";

@Injectable({
  providedIn: "root",
})
export class ControllerService {
  private util = new Util();

  private _especies: EspecieAnimalDTO[];
  private _agrupamentos: AgrupamentoDTO[];
  private _lancamentosLocalDB: LancamentosDTO[];
  private _declaracoesLocalDB: DeclaracaoDTO[];
  constructor(
    private onlineOfflineService: OnlineOfflineService,
    private dataBaseService: DataBaseService,
    private localBaseService: LocalBaseService
  ) {
    this.atualizarStatusConexao();
  }

  init() {
    if (this.onlineOfflineService.isOnline) {
      console.log("Inicializando como Online");
      this.sincronizaDados();
    }
  }
  private async sincronizaDados() {
    try {
      await this.obtemEspecieAnimal();
      await this.obtemAgrupamentos();
      await this.atualizaLancamentosPendentes();
      await this.atualizaDeclaracoesPendentes();
    } catch (err) {
      console.log("Erro Encontrado: ", err);
    }
  }

  async salvarLancamento(lancamento: LancamentosDTO): Promise<any> {
    if(lancamento.id){
      await this.localBaseService.deleteLancamento(lancamento)
    }else{
      lancamento.id = new Util().getRandomId();
    }

    return await this.localBaseService
          .salvarNovoLancamento(lancamento)
          .then((res) => {return lancamento})
          .catch((err) => {
            console.log("erro no post local: ", err);
            return throwError;
          });
  }

  async enviarLancamento(lancamento:LancamentosDTO){
    if (this.onlineOfflineService.isOnline) {
        
      lancamento.tipoEnvio = TipoEnvioEnum.SUCESSO;
      return this.dataBaseService
        .postLancamento(lancamento)
        .toPromise()
        .then((res) => {return lancamento;})
        .then(()=> this.deleteLancamentoLocal(lancamento))
        .catch((err) => {
          console.log("Erro ao enviar Lancamento: ", err);
          lancamento.tipoEnvio = TipoEnvioEnum.PENDENTE
          this.salvarLancamento(lancamento);
          return throwError;
        });

    }else{
      this.salvarLancamento(lancamento)
    }
  }

  private  async deleteLancamentoLocal(lancamento:LancamentosDTO){
    await this.localBaseService.deleteLancamento(lancamento)
  }

  async salvarDeclaracao(declaracao: DeclaracaoDTO): Promise<any> {
    if(declaracao.id){
      await this.localBaseService.deleteDeclaracoes(declaracao)
    }else{
      declaracao.id = this.util.getRandomId();
    }

    return await this.localBaseService
          .salvarDeclaracoes(declaracao)
          .then((res) => {return declaracao})
          .catch((err) => {
            console.log("erro no post local: ", err);
            return throwError;
          });
  }

  async enviarDeclaracao(declaracao:DeclaracaoDTO){
    if (this.onlineOfflineService.isOnline) {
        
      declaracao.tipoEnvio = TipoEnvioEnum.EM_ANALISE;
      if(declaracao.id ===null)
        declaracao.id = this.util.getRandomId();
      return this.dataBaseService
        .postDeclaracao(declaracao)
        .toPromise()
        .then((res) => {return declaracao;})
        .catch((err) => {
          console.log("Erro ao enviar Declaracao: ", err);
          declaracao.tipoEnvio = TipoEnvioEnum.PENDENTE
          this.salvarDeclaracao(declaracao);
          return throwError;
        });

    }else{
      declaracao.tipoEnvio = TipoEnvioEnum.PENDENTE
      this.salvarDeclaracao(declaracao)
    }
  }
  async deleteDeclaracaoLocal(declaracao:DeclaracaoDTO){
    await this.localBaseService.deleteDeclaracoes(declaracao)
  }

  private atualizarStatusConexao() {
    this.onlineOfflineService.trocaConexao.subscribe((online) => {
      if (online) {
        console.log("Está Online");
        this.atualizaLancamentosPendentes();
        this.atualizaDeclaracoesPendentes();
      } else {
        console.log("Está Offline");
      }
    });
  }

  async atualizaLancamentosPendentes() {
    this.lancamentosLocalDB = await this.localBaseService.getAllLancamentos();
    if (!this.lancamentosLocalDB || this.lancamentosLocalDB.length <= 0) return;

    //Obtem somente lancamentos pendentes
    let lancamentosPendentes: Array<LancamentosDTO> = [];
    this.lancamentosLocalDB.forEach((value) => {
      if (value.tipoEnvio === TipoEnvioEnum.PENDENTE.valueOf())
        lancamentosPendentes.push(value);
    });

    if (lancamentosPendentes && lancamentosPendentes.length > 0) {
      for (let lancamento of lancamentosPendentes) {
        this.salvarLancamento(lancamento);
        await this.localBaseService.deleteLancamento(lancamento);
      }
    }

    console.log("Atualiza Lancamentos Pedentes:", lancamentosPendentes);
  }

  atualizaDeclaracoesPendentes() {
    console.log("Atualiza Declaracoes Pedentes!");
  }

  async getLancamentos() {
    let lancamentos: LancamentosDTO[];

    if (this.onlineOfflineService.isOnline)
      lancamentos = await this.dataBaseService.getAllLancamentos().toPromise();

    if (!this.lancamentosLocalDB)
      this.lancamentosLocalDB = await this.localBaseService.getAllLancamentos();

    let array = [];
    if (lancamentos && Object.values(lancamentos).length > 0)
      Object.values(lancamentos).forEach((value) => array.push(value));
    if (this.lancamentosLocalDB && Object.values(this.lancamentosLocalDB).length > 0)
      Object.values(this.lancamentosLocalDB).forEach((value) => array.push(value));

    return array;
  }

  get especies() {
    return this._especies;
  }

  get agrupamentos() {
    return this._agrupamentos;
  }

  get lancamentosLocalDB() {
    return this._lancamentosLocalDB;
  }

  set lancamentosLocalDB(lancamentos: LancamentosDTO[]) {
    this._lancamentosLocalDB = lancamentos;
  }

  get declaracoesLocalDB(){
    return this._declaracoesLocalDB;
  }

  set declaracoesLocalDB(declaracoes: DeclaracaoDTO[]){
    this._declaracoesLocalDB = declaracoes
  }

  getAgrupamentosPorEspecieAnimal(id: number) {
    return this._agrupamentos.filter((value) => value.idEspecieAnimal === id);
  }
  getAgrupamentosZeradoPorEspecie(id:number):AgrupamentoDTO[]{
    
    let agrup = this.getAgrupamentosPorEspecieAnimal(id)
    agrup.forEach((agrupamento) => {
      agrupamento.subAgrupamento.forEach((subAgrupamento) => {
        subAgrupamento.quantidade = 0;
      });
    });
    
    return agrup;
  }

  private async obtemEspecieAnimal() {
    if (this._especies) return;

    this._especies = await this.dataBaseService.getAllEspecies().toPromise();
  }

  private async obtemAgrupamentos() {
    if (this._agrupamentos) return;

    this._agrupamentos = await this.dataBaseService
      .getAllAgrupamentosSubAgrupamentos()
      .toPromise();
  }

  getAllPropriedades() {
    return this.dataBaseService.getAllPropriedades();
  }

  getAllAgronegocios() {
    return this.dataBaseService.getAllAgronegocios();
  }
  getTiposLancamento() {
    return this.dataBaseService.getAllTiposLancamento();
  }
  getTiposExploracao() {
    return this.dataBaseService.getAllTiposExploracao();
  }
  getTiposFinalidade() {
    return this.dataBaseService.getAllTiposFinalidade();
  }
  async getAllDeclaracoes(){
      let declaracoes: DeclaracaoDTO[];
  
      if (this.onlineOfflineService.isOnline)
        declaracoes = await this.dataBaseService.getAllDeclaracoes().toPromise();
  
      if (!this.declaracoesLocalDB)
        this.declaracoesLocalDB = await this.localBaseService.getAllDeclaracoes();
  
      let array = [];
      if (declaracoes && Object.values(declaracoes).length > 0)
        Object.values(declaracoes).forEach((value) => array.push(value));
      if (this.declaracoesLocalDB && Object.values(this.declaracoesLocalDB).length > 0)
        Object.values(this.declaracoesLocalDB).forEach((value) => array.push(value));
  
      return array;
    
  }
  atualizaAgronegocio(agronegocioAtualizado: AgronegocioDTO){
    let agronegocio:AgronegocioDTO = {
      id: agronegocioAtualizado.id,
      idEspecieAnimal: agronegocioAtualizado.idEspecieAnimal,
      idGrupoProdutor: agronegocioAtualizado.idGrupoProdutor,
      idPropriedade:agronegocioAtualizado.idPropriedade,
      nomeGrupoProdutor: agronegocioAtualizado.nomeGrupoProdutor,
      status: agronegocioAtualizado.status
    }
    return this.dataBaseService.atualizaAgronegocio(agronegocio);
  }
}

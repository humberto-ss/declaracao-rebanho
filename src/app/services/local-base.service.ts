import { Injectable } from '@angular/core';
import Dexie from "dexie";
import { DeclaracaoDTO } from '../DTOs/declaracaoDTO';
import { LancamentosDTO } from '../DTOs/lancamentosDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalBaseService {
  private db: Dexie;
  private lancamentoTable: Dexie.Table<LancamentosDTO, number> = null;
  private declaracaoTable: Dexie.Table<DeclaracaoDTO, number> = null;
  
  constructor() {
    this.criaDataBase();
   }

  private criaDataBase() {
    this.db = new Dexie("db-declaracao");
    this.db.version(1).stores({
      lancamentos: "id",
      declaracoes:"id"
    });
  
    this.lancamentoTable = this.db.table("lancamentos");
    this.declaracaoTable = this.db.table("declaracoes");
  }

  async getAllLancamentos() {
    return await this.lancamentoTable.toArray();
  }

  async salvarNovoLancamento(lancamento: LancamentosDTO){
    return await this.lancamentoTable.add(lancamento);
  }
  
  async deleteLancamento(lancamento: LancamentosDTO){
    return await this.lancamentoTable.delete(lancamento.id)  
  }

  async getAllDeclaracoes() {
    return await this.declaracaoTable.toArray();
  }

  async salvarDeclaracoes(declaracao: DeclaracaoDTO){
    return await this.declaracaoTable.add(declaracao);
  }
  
  async deleteDeclaracoes(declaracao: DeclaracaoDTO){
    return await this.declaracaoTable.delete(declaracao.id)  
  }
}

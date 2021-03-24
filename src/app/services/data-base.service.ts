import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgronegocioDTO } from '../DTOs/agronegocioDTO';
import { AgrupamentoDTO } from '../DTOs/agrupamentoDTO';
import { DeclaracaoDTO } from '../DTOs/declaracaoDTO';
import { EspecieAnimalDTO } from '../DTOs/especieAnimalDTO';
import { LancamentosDTO } from '../DTOs/lancamentosDTO';
import { PropriedadeRuralDTO } from '../DTOs/propriedadeRuralDTO';
import { TipoExploracaoDTO } from '../DTOs/tipoExploracaoDTO';
import { TipoFinalidadeDTO } from '../DTOs/tipoFinalidadeDTO';
import { TipoLancamentoDTO } from '../DTOs/tipoLancamentoDTO';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private URL_PATH = "https://declaracao-rebanho-default-rtdb.firebaseio.com";
  constructor(private http: HttpClient) { }

  getAllPropriedades(): Observable<PropriedadeRuralDTO[]> {
    return this.http.get<PropriedadeRuralDTO[]>(this.URL_PATH + "/propriedades.json");
  }

  getAllAgronegocios(): Observable<AgronegocioDTO[]> {
    return this.http.get<AgronegocioDTO[]>(this.URL_PATH + "/agronegocios.json");
  }

  getAllEspecies(): Observable<EspecieAnimalDTO[]> {
    return this.http.get<EspecieAnimalDTO[]>(this.URL_PATH + "/especies.json");
  }

  //Deve vir ordenada em ordem de apresentação em tela
  getAllAgrupamentosSubAgrupamentos(): Observable<AgrupamentoDTO[]> {
    return this.http.get<AgrupamentoDTO[]>(this.URL_PATH + "/agrupamentos.json");
  }

  getAllTiposLancamento(): Observable<TipoLancamentoDTO[]> {
    return this.http.get<TipoLancamentoDTO[]>(this.URL_PATH + "/tiposLancamento.json");
  }

  getAllTiposFinalidade(): Observable<TipoFinalidadeDTO[]> {
    return this.http.get<TipoFinalidadeDTO[]>(this.URL_PATH + "/tiposFinalidade.json");
  }

  getAllTiposExploracao(): Observable<TipoExploracaoDTO[]> {
    return this.http.get<TipoExploracaoDTO[]>(this.URL_PATH + "/tiposExploracao.json");
  }

  getAllLancamentos(): Observable<LancamentosDTO[]> {
    return this.http.get<LancamentosDTO[]>(this.URL_PATH + "/lancamentos.json");
  }

  postLancamento(lancamento : LancamentosDTO):Observable<LancamentosDTO>{
    return this.http.post<LancamentosDTO>(this.URL_PATH+"/lancamentos.json",lancamento)
  }

  getAllDeclaracoes(): Observable<DeclaracaoDTO[]> {
    return this.http.get<DeclaracaoDTO[]>(this.URL_PATH + "/declaracoes.json");
  }

  postDeclaracao(declaracao : DeclaracaoDTO):Observable<DeclaracaoDTO>{
    return this.http.post<DeclaracaoDTO>(this.URL_PATH+"/declaracoes.json",declaracao)
  }
  atualizaAgronegocio(agronegocio: AgronegocioDTO):Observable<AgronegocioDTO>{
    return this.http.put<AgronegocioDTO>(this.URL_PATH+`/agronegocios/${agronegocio.id}.json`,agronegocio)
  }
}

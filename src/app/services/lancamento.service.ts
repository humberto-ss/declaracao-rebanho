import { Injectable, OnInit } from '@angular/core';
// import { LancamentoModel } from '../components/lancamentos/lancamento.model';
import { TiposLancamentosModel } from '../components/tipos-lancamentos/tipos-lancamentos.model';
import { AgronegocioDTO } from '../DTOs/agronegocioDTO';
import { LancamentosDTO } from '../DTOs/lancamentosDTO';
import { CategoriasEnum } from '../util/categoriasEnum' 
import { SubCategoriaEnum } from '../util/subCategoriaEnum' 
import { AgronegocioService } from './agronegocio.service';
import { PopulaDados } from "./populaDados";

@Injectable({
  providedIn: 'root'
})
export class LancamentoService implements OnInit {
  private _lancamentos: LancamentosDTO[];
  private _tiposLancamentos: TiposLancamentosModel[];
  private _tipoLancamentoSelecionado: TiposLancamentosModel;
  agronegocio: AgronegocioDTO;

  constructor(private agronegocioService:AgronegocioService) { 
    this.populaTiposLancamentosModel();
    this.populaLancamentosComponent();
  }
  
  ngOnInit(){
  }

  get lancamentos(){
    return this._lancamentos;
  }

  get tiposLancamentos(){
    return this._tiposLancamentos;
  }

  get tipoLancamentoSelecionado(){
    return this._tipoLancamentoSelecionado;
  }

  set tipoLancamentoSelecionado(selectedType:TiposLancamentosModel){
    this._tipoLancamentoSelecionado = selectedType;
  }

  getLancamentoPorId(lancamentoId: number){
    return this.lancamentos.find( lancamento => lancamento.id === lancamentoId);
  }

  setAgronegocio(agronegocioModel: AgronegocioDTO){
    this.agronegocio = agronegocioModel;
  }

  obtemLancamentosPorAgronegocio(){
    this.obtemAgronegocioSelecionado();
    return this.lancamentos.filter( lanc => lanc.idAgronegocio === this.agronegocio.id)
  }

  obtemAgronegocioSelecionado(){
    this.setAgronegocio(this.agronegocioService.agronegocioSelecionado);
  }

  private populaTiposLancamentosModel(){
    return this._tiposLancamentos = new PopulaDados().populaTiposLancamentos();
    
  }

  private populaLancamentosComponent(){
    this._lancamentos = new PopulaDados().populaLancamentosComponent();
  }

  salvarNovo(lancamento:LancamentosDTO){
    //Chamar Controller para Enviar para banco externo
    //Chamar Controller para gravar no banco local
  }
}

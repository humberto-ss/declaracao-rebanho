import { Injectable } from '@angular/core';
import { AgronegocioModel } from '../components/agronegocios/agronegocio.model';
import { LancamentoModel } from '../components/lancamentos/lancamento.model';
import { TiposLancamentosModel } from '../components/tipos-lancamentos/tipos-lancamentos.model';
import { LancamentosDTO } from '../DTOs/lancamentosDTO';
import { CategoriasEnum } from '../util/categoriasEnum' 
import { SubCategoriaEnum } from '../util/subCategoriaEnum' 
import { AgronegocioService } from './agronegocio.service';
import { PopulaDados } from "./populaDados";

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private _lancamentos: LancamentosDTO[];
  private _tiposLancamentos: TiposLancamentosModel[];
  private _tipoLancamentoSelecionado: TiposLancamentosModel;
  agronegocioModel: AgronegocioModel;

  constructor(private agronegocioService:AgronegocioService) { 
    this.populaLancamentosComponent();
    this.populaTiposLancamentosModel();
    this.setAgronegocio(this.agronegocioService.agronegocioSelecionado);
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

  setAgronegocio(agronegocioModel: AgronegocioModel){
    this.agronegocioModel = agronegocioModel;
  }

  obtemLancamentosPorAgronegocio(){
    return this.lancamentos.filter( lanc => lanc.idAgronegocio === this.agronegocioModel.id)
  }

  private populaTiposLancamentosModel(){
    return this._tiposLancamentos = [
      new TiposLancamentosModel(
        0,
        "Evolução Rebanho",
        false
      ),
      new TiposLancamentosModel(
        1,
        "Sem Movimentação",
        false
      )
    ]
  }

  private populaLancamentosComponent(){
    this._lancamentos = new PopulaDados().populaLancamentosComponent();
  }
}

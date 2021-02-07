import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AgronegocioDTO } from '../DTOs/agronegocioDTO';
import { PropriedadeRuralDTO } from '../DTOs/propriedadeRuralDTO';
import { EspecieAnimalEnum }  from '../util/especieAnimalEnum';
import { PopulaDados} from "./populaDados"

@Injectable({
  providedIn: 'root'
})
export class AgronegocioService implements OnInit {
  private _agronegocios: AgronegocioDTO[];
  agronegociosPropriedade: AgronegocioDTO[];
  private _agronegociosToComponent = new Subject<void>();
  private _agronegocioSelecionado: AgronegocioDTO;

  constructor() {
    this.populaAgronegocios();
  }
   ngOnInit(){}

  carregaAgronegocios(propriedadeSelecionada: PropriedadeRuralDTO){
    this.getAgronegociosModels(propriedadeSelecionada.id);
  }

  getAgronegociosModels(idPropriedade:number){
     this.agronegociosPropriedade = this._agronegocios.filter(agro=> agro.propriedadeRural.id ===idPropriedade);
     this._agronegociosToComponent.next();
  }

  getAgronegociosPorId(idAgronegocio: number){
    return this._agronegocios.find(agro=> agro.id ===idAgronegocio);
  }

  get agronegocioSelecionado(){
    return this._agronegocioSelecionado;
  }

  setAgronegocioSelecionado(agronegocioSelecionado: AgronegocioDTO){
    this._agronegocioSelecionado = agronegocioSelecionado;
  }

  populaAgronegocios(){
    this._agronegocios = new PopulaDados().populaAgronegocios();
  }

  get agronegocios(){
    return [...this._agronegocios];
  }

  get agronegociosToComponent(){
    return this._agronegociosToComponent
  }
}

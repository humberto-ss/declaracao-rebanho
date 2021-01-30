import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AgronegocioModel } from '../components/agronegocios/agronegocio.model';
import { PropriedadesRuraisModel } from '../components/propriedades-rurais/propriedades-rurais.model';
import { EspecieAnimalEnum }  from '../util/especieAnimalEnum';
import { PopulaDados} from "./populaDados"

@Injectable({
  providedIn: 'root'
})
export class AgronegocioService implements OnInit {
  private _agronegocios: AgronegocioModel[];
  agronegociosPropriedade: AgronegocioModel[];
  private _agronegociosToComponent = new Subject<void>();
  private _agronegocioSelecionado: AgronegocioModel;

  constructor() {
    this.populaAgronegocios();
  }
   ngOnInit(){}

  carregaAgronegocios(propriedadeSelecionada: PropriedadesRuraisModel){
    this.getAgronegociosModels(propriedadeSelecionada.id);
  }

  getAgronegociosModels(idPropriedade:number){
     this.agronegociosPropriedade = this._agronegocios.filter(agro=> agro.idPropriedade ===idPropriedade);
     this._agronegociosToComponent.next();
  }

  getAgronegociosPorId(idAgronegocio: number){
    return this._agronegocios.find(agro=> agro.id ===idAgronegocio);
  }

  get agronegocioSelecionado(){
    return this._agronegocioSelecionado;
  }

  setAgronegocioSelecionado(agronegocioModel: AgronegocioModel){
    this._agronegocioSelecionado = agronegocioModel;
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

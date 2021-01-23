import { Injectable } from '@angular/core';
import { PropriedadesRuraisModel } from '../components/propriedades-rurais/propriedades-rurais.model';

@Injectable({
  providedIn: 'root'
})
export class AgronegocioService {

  constructor() { }

  carregaAgronegocios(propriedadeSelecionada: PropriedadesRuraisModel){
    getAgronegociosModels(propriedadeSelecionada.id);
  }

  getAgronegociosModels(idPropriedade:number){

  }
}

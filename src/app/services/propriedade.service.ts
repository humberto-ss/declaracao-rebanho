import { Injectable, OnInit } from '@angular/core';
import { PropriedadesRuraisModel } from '../components/propriedades-rurais/propriedades-rurais.model';
import { AgronegocioService } from './agronegocio.service';
import { PopulaDados } from "./populaDados";

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService implements OnInit{
  propriedadesComponent: PropriedadesRuraisModel[];
  propriedadeSelecionada: PropriedadesRuraisModel;
  constructor(private agronegocioService: AgronegocioService) { }

  ngOnInit(){
    
  }
  
  changePropriedade(propriedadeSelecionada: PropriedadesRuraisModel){
    this.propriedadeSelecionada = propriedadeSelecionada;
    this.agronegocioService.carregaAgronegocios(propriedadeSelecionada);
  }
  populaPropriedadesComponent(){
   return this.propriedadesComponent = new PopulaDados().populaPropriedadesComponent();
  }

}

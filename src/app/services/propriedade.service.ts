import { Injectable, OnInit } from '@angular/core';
import { PropriedadeRuralDTO } from '../DTOs/propriedadeRuralDTO';
import { AgronegocioService } from './agronegocio.service';
import { PopulaDados } from "./populaDados";

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService implements OnInit{
  propriedadesComponent: PropriedadeRuralDTO[];
  propriedadeSelecionada: PropriedadeRuralDTO;
  constructor(private agronegocioService: AgronegocioService) { }

  ngOnInit(){
    
  }
  
  changePropriedade(propriedadeSelecionada: PropriedadeRuralDTO){
    this.propriedadeSelecionada = propriedadeSelecionada;
    this.agronegocioService.carregaAgronegocios(propriedadeSelecionada);
  }
  populaPropriedades(){
   return this.propriedadesComponent = new PopulaDados().populaPropriedadesDTO();
  }

}

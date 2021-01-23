import { Injectable, OnInit } from '@angular/core';
import { PropriedadesRuraisModel } from '../components/propriedades-rurais/propriedades-rurais.model';
import { AgronegocioService } from './agronegocio.service';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService implements OnInit{
  propriedadesComponent: PropriedadesRuraisModel[];
  propriedadeSelecionada: PropriedadesRuraisModel;
  constructor(private agronegocioService: AgronegocioService) { }

  ngOnInit(){
    
  }

  populaPropriedadesComponent(){
   return this.propriedadesComponent =[
      new PropriedadesRuraisModel( 
        0,
        'Estrela da Morte',
        20,
        'RS1241412BR'
      ),
      new PropriedadesRuraisModel( 
         1,
        'Vulcano',
        50,
        'RS000000BR'
      ),
      new PropriedadesRuraisModel( 
        2,
        'Asgard',
        88,
        'RS999999BR'
      ),
      new PropriedadesRuraisModel( 
        3,
        'Gothan',
        99,
        'RS984230958234BR'
      )
    ]
  }
  changePropriedade(propriedadeSelecionada: PropriedadesRuraisModel){
    this.propriedadeSelecionada = propriedadeSelecionada;
    this.agronegocioService.carregaAgronegocios(propriedadeSelecionada);
  }

}

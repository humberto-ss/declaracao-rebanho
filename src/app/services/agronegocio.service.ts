import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AgronegocioModel } from '../components/agronegocios/agronegocio.model';
import { PropriedadesRuraisModel } from '../components/propriedades-rurais/propriedades-rurais.model';

@Injectable({
  providedIn: 'root'
})
export class AgronegocioService implements OnInit {
  private _agronegocios: AgronegocioModel[];
  agronegociosPropriedade: AgronegocioModel[];
  private _agronegociosToComponent = new Subject<void>();

  constructor() {
    this.populaAgronegocios();
  }
   ngOnInit(){
   }

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

  populaAgronegocios(){
    this._agronegocios=[
      new AgronegocioModel(
        0,
        0,
        1,
        'BOVINOS',
        'LUKE SKYWALKER, ANAKIN SKYWALKER',
        true
      ),
      new AgronegocioModel(
        1,
        0,
        2,
        'BUBALINO',
        'LUKE SKYWALKER',
        true
      ),
      new AgronegocioModel(
        2,
        0,
        3,
        'CAPRINO',
        'LUKE SKYWALKER, PRINCESS LEIA ORGANA SKYWALKER',
        false
      ),
      new AgronegocioModel(
        3,
        1,
        1,
        'BOVINOS',
        'SPOCK, JAMES T. KIRK',
        true
      ),
      new AgronegocioModel(
        4,
        1,
        2,
        'BUBALINO',
        'SPOCK, JAMES T. KIRK',
        true
      ),
      new AgronegocioModel(
        5,
        2,
        1,
        'BOVINOS',
        'THOR, LOKI',
        true
      ),
      new AgronegocioModel(
        6,
        2,
        1,
        'BOVINOS',
        'THOR, LOKI, ODIN, FRIGGA',
        true
      ),
      new AgronegocioModel(
        7,
        2,
        5,
        'ABELHAS',
        'LOKI, HELA',
        true
      ),
      new AgronegocioModel(
        8,
        3,
        1,
        'BOVINOS',
        'BATMAN, BRUCE, ALFRED',
        true
      ),
      new AgronegocioModel(
        9,
        3,
        5,
        'ABELHAS',
        'LUCIUS FOX, BARBARA GORDON, JAMES W. GORDON',
        true
      ),
      new AgronegocioModel(
        10,
        3,
        2,
        'BUBALINOS',
        'BATMAN, ROBIN',
        true
      ),
      new AgronegocioModel(
        11,
        3,
        3,
        'CAPRINO',
        'DUAS CARAS, CHARADA',
        true
      ),
      new AgronegocioModel(
        12,
        3,
        4,
        'AVES',
        'MULHER-GATO, PINGUIM, ESPANTALHO',
        true
      ),
      new AgronegocioModel(
        13,
        3,
        5,
        'ABELHAS',
        'CORINGA, HARLEY QUINN',
        true
      ),
      new AgronegocioModel(
        14,
        3,
        2,
        'BUBALINO',
        'RAS AL GHUL, TALIA AL GHUL',
        true
      )
    ]
  }

  get agronegocios(){
    return [...this._agronegocios];
  }

  get agronegociosToComponent(){
    return this._agronegociosToComponent
  }
}

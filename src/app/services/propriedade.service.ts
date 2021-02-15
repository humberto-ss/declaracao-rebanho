import { Injectable, OnInit } from "@angular/core";
import { PropriedadeRuralDTO } from "../DTOs/propriedadeRuralDTO";
import { AgronegocioService } from "./agronegocio.service";
import { PopulaDados } from "./populaDados";
import { tap, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { ControllerService } from "./controller.service";

@Injectable({
  providedIn: "root",
})
export class PropriedadeService{
  propriedadesComponent: PropriedadeRuralDTO[];
  propriedadeSelecionada: PropriedadeRuralDTO;
  private _propriedades = new BehaviorSubject<PropriedadeRuralDTO[]>([]);

  propriedadesController: Observable<PropriedadeRuralDTO[]>
  
  constructor(
    private agronegocioService: AgronegocioService,
    private controllerService: ControllerService,
    private http: HttpClient
  ) {}

  get propriedades(){
    return this._propriedades.asObservable();
  }

  changePropriedade(propriedadeSelecionada: PropriedadeRuralDTO) {
    this.propriedadeSelecionada = propriedadeSelecionada;
    this.agronegocioService.carregaAgronegocios(propriedadeSelecionada);
  }
  populaPropriedades() {
    // this.propriedadesController=  this.controllerService.propriedades;
    return this.getPropriedadesFromDataBase();
    // console.log("Propriedades: "+this.propriedades);
    //  return this.propriedadesComponent = new PopulaDados().populaPropriedadesDTO();
  }

  getPropriedadesFromDataBase() {
    console.log("On FireBase")
     return this.http
      .get<{ [key: string]: PropriedadeRuralDTO }>(
        "https://declaracao-rebanho-default-rtdb.firebaseio.com/propriedade.json"
      )
      .pipe(
        map((resData) => {
          let propriedadeDTO: PropriedadeRuralDTO[] = [];
          for (const key in resData) {
            // let propriedade: PropriedadeRuralDTO = { id: resData[key].id, nome: resData[key].nome,area: resData[key].area,inscricaoEstadual: resData[key].inscricaoEstadual}
            propriedadeDTO.push({
              id: resData[key].id,
              nome: resData[key].nome,
              area: resData[key].area,
              inscricaoEstadual: resData[key].inscricaoEstadual
            });
          }
          return propriedadeDTO;
        })
        ,
        tap((propriedadeDTO) => {
          this._propriedades.next(propriedadeDTO); 
        })
      ) 
  }
  
}

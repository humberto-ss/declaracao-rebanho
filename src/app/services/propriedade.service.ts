import { Injectable, OnInit } from "@angular/core";
import { PropriedadeRuralDTO } from "../DTOs/propriedadeRuralDTO";
import { AgronegocioService } from "./agronegocio.service";
import { ControllerService } from "./controller.service";

@Injectable({
  providedIn: "root",
})
export class PropriedadeService{
  propriedadesComponent: PropriedadeRuralDTO[];
  propriedadeSelecionada: PropriedadeRuralDTO;
  
  constructor(
    private agronegocioService: AgronegocioService,
    private controllerService: ControllerService
  ) {}

  get propriedadesController(){
    return this.controllerService.getAllPropriedades();
  }

  changePropriedade(propriedadeSelecionada: PropriedadeRuralDTO) {
    this.propriedadeSelecionada = propriedadeSelecionada;
    this.agronegocioService.carregaAgronegocios(propriedadeSelecionada);
  }

  
}

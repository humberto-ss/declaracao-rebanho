import { Component, OnInit } from "@angular/core";

import { AgronegocioService } from "src/app/services/agronegocio.service";
import { LancamentoService } from "src/app/services/lancamento.service";
import { CategoriasEnum } from '../../../../../util/categoriasEnum';
import { SubCategoriaEnum } from '../../../../../util/subCategoriaEnum';
import { LancamentosDTO } from "../../../../../DTOs/lancamentosDTO";
import { NavController } from "@ionic/angular";
import { AgronegocioDTO } from "src/app/DTOs/agronegocioDTO";
import { SubAgrupamento } from "src/app/DTOs/subAgrupamentoDTO";
import { EspecieAnimalEnum } from "src/app/util/especieAnimalEnum";
import { Util } from "../../../../../util/util";


@Component({
  selector: "app-novo-lancamento",
  templateUrl: "./novo-lancamento.page.html",
  styleUrls: ["./novo-lancamento.page.scss"],
})
export class NovoLancamentoPage implements OnInit {
  
  agronegocio: AgronegocioDTO;
  especieAnimal: EspecieAnimalEnum;
  private lancamento: LancamentosDTO;

  constructor(
    private lancamentoService: LancamentoService,
    private agronegocioService: AgronegocioService,
    private navControl: NavController

  ) {}

  public get categoriasEnum(): typeof CategoriasEnum {
    return CategoriasEnum; 
  }

  public get subCategoriasEnum(): typeof SubCategoriaEnum {
    return SubCategoriaEnum; 
  }

  ngOnInit() {
    this.agronegocio = this.agronegocioService.agronegocioSelecionado;
    
    if (!this.agronegocio) {
      this.navControl.navigateBack('/propriedade');
    }
    console.log(this.agronegocio.especieAnimal.id)
  }

  salvar(data: SubAgrupamento[]){
    
    this.lancamento = {
      id:null,
      idAgronegocio: this.agronegocio.id,
      dtLancamento: new Util().getDate(),
      tipoLancamento: null,
      blnEnviado:false,
      subAgrupamento: data
    }
    this.lancamentoService.salvarNovo(this.lancamento);

    
  }
}

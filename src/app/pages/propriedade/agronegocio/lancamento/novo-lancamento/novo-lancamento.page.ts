import { Component, OnInit } from "@angular/core";
import { AgronegocioModel } from "src/app/components/agronegocios/agronegocio.model";
import { AgronegocioService } from "src/app/services/agronegocio.service";
import { LancamentoService } from "src/app/services/lancamento.service";
import { BovinosTemplate } from "../especies/bovinos";
import { CategoriasEnum } from '../../../../../util/categoriasEnum';
import { SubCategoriaEnum } from '../../../../../util/subCategoriaEnum';
import { LancamentosDTO } from "../../../../../DTOs/lancamentosDTO";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-novo-lancamento",
  templateUrl: "./novo-lancamento.page.html",
  styleUrls: ["./novo-lancamento.page.scss"],
})
export class NovoLancamentoPage implements OnInit {
  dataTemplate: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  agronegocio: AgronegocioModel;

  constructor(
    private lancamentoService: LancamentoService,
    private agronegocioService: AgronegocioService,
    private bovinosTemplate: BovinosTemplate,
    private navControl: NavController

  ) {}

  public get categoriasEnum(): typeof CategoriasEnum {
    return CategoriasEnum; 
  }

  public get subCategoriasEnum(): typeof SubCategoriaEnum {
    return SubCategoriaEnum; 
  }

  ngOnInit() {
    this.agronegocio = this.agronegocioService.getAgronegociosPorId(
      this.lancamentoService.agronegocioModel.id
    );
    
    // this.renderizar();
    if (!this.agronegocio) {
      this.navControl.navigateBack('/propriedade');
    }
  }

  renderizar() {
    var conteudo = document.createElement("div");
    conteudo.innerHTML = this.bovinosTemplate.conteudoHtml();
    document.getElementById("novoLancamento").appendChild(conteudo);
  }

  add(id: number) {
    switch (id) {
      case 0:
        this.dataTemplate[0] += 1;
        break;
      case 1:
        this.dataTemplate[1] += 1;
        break;
      case 2:
        this.dataTemplate[2] += 1;
        break;
      case 3:
        this.dataTemplate[3] += 1;
        break;
      case 4:
        this.dataTemplate[4] += 1;
        break;
      case 5:
        this.dataTemplate[5] += 1;
        break;
      case 6:
        this.dataTemplate[6] += 1;
        break;
      case 7:
        this.dataTemplate[7] += 1;
        break;
      default:
    }
  }
  remove(id: number) {
    switch (id) {
      case 0:
        if (this.dataTemplate[0] !== 0) {
          this.dataTemplate[0] -= 1;
        }
        break;
      case 1:
        if (this.dataTemplate[1] !== 0) {
          this.dataTemplate[1] -= 1;
        }
        break;
      case 2:
        if (this.dataTemplate[2] !== 0) {
          this.dataTemplate[2] -= 1;
        }
        break;
      case 3:
        if (this.dataTemplate[3] !== 0) {
          this.dataTemplate[3] -= 1;
        }
        break;
      case 4:
        if (this.dataTemplate[4] !== 0) {
          this.dataTemplate[4] -= 1;
        }
        break;
      case 5:
        if (this.dataTemplate[5] !== 0) {
          this.dataTemplate[5] -= 1;
        }
        break;
      case 6:
        if (this.dataTemplate[6] !== 0) {
          this.dataTemplate[6] -= 1;
        }
        break;
      case 7:
        if (this.dataTemplate[7] !== 0) {
          this.dataTemplate[7] -= 1;
        }
        break;
      default:
    }
  }

  salvar() {
    switch (this.agronegocio.idEspecieAnimal) {
      case 1:
        this.bovinosTemplate.populaDTO(this.agronegocio.id, this.dataTemplate);
        break;
      default:
        console.log("Especie Não localizada");
    }
  }
}

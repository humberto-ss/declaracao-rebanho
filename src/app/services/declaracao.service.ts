import { Injectable, OnInit } from "@angular/core";
import { AgronegocioModel } from "../components/agronegocios/agronegocio.model";
import { TipoExploracaoModel } from "../components/tipos-exploracao/tipo-exploracao.model";
import { AgronegocioService } from "./agronegocio.service";
import { EspecieAnimalEnum } from  '../util/especieAnimalEnum'
import { RacaEnum } from "../util/racaEnum";
import { PopulaDados } from "./populaDados"
import { DeclaracaoModel } from "../components/declaracoes/declaracao.model";

@Injectable({
  providedIn: "root",
})
export class DeclaracaoService implements OnInit {
  private _tipoExploracaoPopulado: TipoExploracaoModel[];
  private _tipoExploracao: TipoExploracaoModel[]=[];
  private tipoExploracaoSelecionado: TipoExploracaoModel;

  agronegocioModel: AgronegocioModel;
  constructor(private agronegocioService: AgronegocioService) {
    this.populaTipoExploracao();
    this.agronegocioModel = this.agronegocioService.agronegocioSelecionado;
    this.tipoExploracaoPorEspecieAnimal();
  }

  ngOnInit() {
  }

  get tipoExploracao() {
      return this._tipoExploracao;
  }

  tipoExploracaoPorEspecieAnimal(){
    LOOP_TIPO:
    for(let tipo of this._tipoExploracaoPopulado){
      LOOP_ESPECIE:
      for(let especieID of tipo.idEspecieAnimal){
        if(especieID === this.agronegocioModel.idEspecieAnimal){
          this._tipoExploracao.push(tipo);
          continue LOOP_TIPO;
        }
      }
    }
  }

  populaDeclaracoesComponent(){
    return new PopulaDados().populaDeclaracoesComponent();
  }

  populaTipoExploracao() {
    return this._tipoExploracaoPopulado = new PopulaDados().populaTipoExploracao();
  }
}

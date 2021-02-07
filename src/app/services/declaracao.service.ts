import { Injectable, OnInit } from "@angular/core";
import { TipoExploracaoModel } from "../components/tipos-exploracao/tipo-exploracao.model";
import { AgronegocioService } from "./agronegocio.service";
import { EspecieAnimalEnum } from  '../util/especieAnimalEnum'
import { RacaEnum } from "../util/racaEnum";
import { PopulaDados } from "./populaDados"
import { DeclaracaoModel } from "../components/declaracoes/declaracao.model";
import { DeclaracoesComponent } from "../components/declaracoes/declaracoes.component";
import { AgronegocioDTO } from '../DTOs/agronegocioDTO'

@Injectable({
  providedIn: "root",
})
export class DeclaracaoService implements OnInit {
  private _tipoExploracaoPopulado: TipoExploracaoModel[];
  private _tipoExploracao: TipoExploracaoModel[]=[];
  private tipoExploracaoSelecionado: TipoExploracaoModel;
  private _declaracoesComponent:DeclaracaoModel[];

  agronegocioSelecionado: AgronegocioDTO;

  constructor(private agronegocioService: AgronegocioService) {
    this.agronegocioSelecionado = this.agronegocioService.agronegocioSelecionado;
    this.populaTipoExploracao();
    this.tipoExploracaoPorEspecieAnimal();
    // this.obtemDeclaracoesPorAgronegocio();
    this.populaDeclaracoesComponent();
  }
  
  ngOnInit() {
  }
  
  get tipoExploracao() {
    return this._tipoExploracao;
  }
  
  get declaracoesComponent(){
    return this._declaracoesComponent;
  }
  
  tipoExploracaoPorEspecieAnimal(){
    LOOP_TIPO:
    for(let tipo of this._tipoExploracaoPopulado){
      LOOP_ESPECIE:
      for(let especieID of tipo.idEspecieAnimal){
        if(especieID === this.agronegocioSelecionado.especieAnimal.id){
          this._tipoExploracao.push(tipo);
          continue LOOP_TIPO;
        }
      }
    }
  }
  
  obtemDeclaracoesPorAgronegocio(){
    this.agronegocioSelecionado = this.agronegocioService.agronegocioSelecionado;
    return this._declaracoesComponent.filter( declaracao => declaracao.idAgronegocio === this.agronegocioSelecionado.id);
  }

  populaDeclaracoesComponent(){
    this._declaracoesComponent = new PopulaDados().populaDeclaracoesComponent();
  }

  populaTipoExploracao() {
    return this._tipoExploracaoPopulado = new PopulaDados().populaTipoExploracao();
  }
}

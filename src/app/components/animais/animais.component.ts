import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { AgrupamentoDTO } from "src/app/DTOs/agrupamentoDTO";
import { DeclaracaoDTO } from "src/app/DTOs/declaracaoDTO";
import { LancamentosDTO } from "src/app/DTOs/lancamentosDTO";
import { AgronegocioService } from "src/app/services/agronegocio.service";
import { ControllerService } from "src/app/services/controller.service";
import { DeclaracaoService } from "src/app/services/declaracao.service";
import { LancamentoService } from "src/app/services/lancamento.service";
import { TipoEnvioEnum } from "src/app/util/tipoEnvioEnum";
import { Util } from "src/app/util/util";
import { SubAgrupamento } from "../../DTOs/subAgrupamentoDTO";

@Component({
  selector: "app-animais",
  templateUrl: "./animais.component.html",
  styleUrls: ["./animais.component.scss"],
})
export class AnimaisComponent implements OnInit {
  @Output() salvar = new EventEmitter();
  @Output() enviar = new EventEmitter();
  @Input() tipoEnvio:TipoEnvioEnum = TipoEnvioEnum.LOCAL;
  @Input() lancamentoSelecionado:LancamentosDTO;
  @Input() declaracaoSelecionada:DeclaracaoDTO;
  @Input() demandante:string;
  private _agrupamento: AgrupamentoDTO[];
  blnEdit: boolean = true;
  isRebanho:boolean;
  isBotaoSalvar:boolean = true;
  isBotaoEnviar:boolean = true;

  constructor(
    private controllerService: ControllerService,
    private lancamentoService: LancamentoService,
    private agronegocioService: AgronegocioService,
    private declaracaoService: DeclaracaoService
  ) {
    this._agrupamento = this.controllerService.getAgrupamentosPorEspecieAnimal(this.agronegocioService.agronegocioSelecionado.idEspecieAnimal)
    this.isConstituiRebanho();
  }

  ngOnInit() {
    this.populaQuantidadeComZeros();
    this.populaQuantidade();
    this.mudaStatusBotao();
  }

  get agrupamentos() {
    return this._agrupamento;
  }

  mudaStatusBotao(){

    if(this.tipoEnvio !== TipoEnvioEnum.LOCAL){
      this.blnEdit = false;
      this.isBotaoEnviar = false;
      this.isBotaoSalvar = false;
    }

    //Quando for Nova Declaração e especie constitui rebanho
    if(this.isNovaDeclaracaoComRebanho()){
      this.isBotaoSalvar = false;
      this.isBotaoEnviar=true;
      this.blnEdit = false;
      this.declaracaoService.isPodeEnviar = true;
    }

  }

  populaQuantidade() {
    var objetoSelecionado:SubAgrupamento[]=[];

    if (this.lancamentoSelecionado)
      objetoSelecionado = this.lancamentoSelecionado.subAgrupamento
    else if(this.declaracaoSelecionada)
      objetoSelecionado = this.declaracaoSelecionada.subAgrupamento
    else if(this.isNovaDeclaracaoComRebanho())
      this.declaracaoService.getQuantidadesParaDeclarar();
    else
      return;

    this.changeStatus(false);
    this.mudaStatusBotao();

    this.agrupamentos.forEach((agrupamento) => {
      agrupamento.subAgrupamento.forEach((subAgrupamento) => {
        for (let sub of objetoSelecionado) {
          if (sub.idSubAgrupamento === subAgrupamento.idSubAgrupamento) {
            subAgrupamento.quantidade = sub.quantidade;
          }
        }
      });
    });
  }

  populaQuantidadeComZeros() {
    this._agrupamento =  this.controllerService.getAgrupamentosZeradoPorEspecie(this.agronegocioService.agronegocioSelecionado.idEspecieAnimal)
  }

  salvarRegistro(event,blnEnviar:boolean) {
    this.changeStatus(false)

    let data: SubAgrupamento[] = [];
    this.agrupamentos.forEach((value) =>
      value.subAgrupamento.forEach((sub) => {
        if (sub.quantidade !== 0) {
          data.push({
            idAgrupamento: sub.idAgrupamento,
            idSubAgrupamento: sub.idSubAgrupamento,
            nome: sub.nome,
            quantidade: sub.quantidade,
          });
        }
      })
    );
    (blnEnviar)?this.enviar.emit(data):this.salvar.emit(data);
  }

  adicionar(sub: SubAgrupamento) {
    this.changeStatus(true)

    this.agrupamentos.filter((value) =>
      value.subAgrupamento.find((val) => {
        if (val.idSubAgrupamento === sub.idSubAgrupamento) val.quantidade += 1;
      })
    );
  }
  remover(sub: SubAgrupamento) {
    this.changeStatus(true)

    this.agrupamentos.filter((value) =>
      value.subAgrupamento.find((val) => {
        if (
          val.idSubAgrupamento === sub.idSubAgrupamento &&
          val.quantidade !== 0
        )
          val.quantidade -= 1;
      })
    );
  }

  private isNovaDeclaracaoComRebanho():boolean{
    return (this.demandante==="declaracao"
             && this.isRebanho
             && this.tipoEnvio===TipoEnvioEnum.LOCAL
            )?true
             :false;
  }

  private isConstituiRebanho(){
    (this.agronegocioService.agronegocioSelecionado.especieAnimal.indRebanho === 1 )
      ?this.isRebanho= true
      :this.isRebanho= false
  }

  changeStatus(change:boolean){
    if(this.demandante === "lancamento")
      this.lancamentoService.changeStatus(change)
    else
      this.declaracaoService.changeStatus(change)
  }

  get isAlterado(){
    if(this.demandante === "lancamento")
      return this.lancamentoService.isAlterado;
    else
      return this.declaracaoService.isAlterado;
  }
  get isPodeEnviar(){
    if(this.demandante === "lancamento")
      return this.lancamentoService.isPodeEnviar;
    else
       return this.declaracaoService.isPodeEnviar;
  }
}

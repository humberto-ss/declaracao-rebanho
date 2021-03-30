import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { AgronegocioDTO } from "src/app/DTOs/agronegocioDTO";
import { LancamentosDTO } from "src/app/DTOs/lancamentosDTO";
import { SubAgrupamento } from "src/app/DTOs/subAgrupamentoDTO";
import { AgronegocioService } from "src/app/services/agronegocio.service";
import { LancamentoService } from "src/app/services/lancamento.service";
import { TipoEnvioEnum } from "src/app/util/tipoEnvioEnum";
import { Util } from "src/app/util/util";

@Component({
  selector: "app-lancamento",
  templateUrl: "./lancamento.page.html",
  styleUrls: ["./lancamento.page.scss"],
})
export class LancamentoPage implements OnInit {
  private _lancamento: LancamentosDTO;
  
  util = new Util();
  agronegocio: AgronegocioDTO;

  constructor(
    private lancamentoService: LancamentoService,
    private agronegocioService: AgronegocioService,
    private navControl: NavController,
    private alertController:AlertController
    ) 
  {}

  ngOnInit() {
    this.obtemLancamentoSelecionado();
    this.atualizaTipoLancamento();
    this.agronegocio = this.agronegocioService.agronegocioSelecionado;
    
    if (!this.agronegocio) {
      this.navControl.navigateBack('/propriedade');
    }
  }

  atualizaTipoLancamento(){
    if(this.lancamento && this.lancamento.tipoLancamento){
      this.lancamentoService.tipoLancamentoSelecionado = this.lancamento.tipoLancamento
    }
  }

  obtemLancamentoSelecionado(){
    this.lancamento =  this.lancamentoService.lancamentoSelecionado;
  }

  salvarLancamento(data: SubAgrupamento[]){
    if(!this.validar(data))
      return
    
    this.lancamento = this.populaLancamento(data)

    this.lancamentoService.salvar(this.lancamento);

  }

  async enviarLancamento(data:SubAgrupamento[]){
    if(!this.validar(data))
      return;

    if(await this.confirm() === false)
      return;

    this.lancamento.tipoEnvio = TipoEnvioEnum.PENDENTE
    this.lancamentoService.enviar(this.lancamento);
    this.navControl.navigateBack(`propriedade/agronegocio/${this.agronegocio.id}`); 
    
  }

 private populaLancamento(data:SubAgrupamento[]){
    return {
      id:(this.lancamento)?this._lancamento.id:null,
      idAgronegocio: this.agronegocio.id,
      dtLancamento: this.util.getDate(),
      idTipoLancamento:(this.lancamentoService.tipoLancamentoSelecionado)?this.lancamentoService.tipoLancamentoSelecionado.id:null,
      tipoLancamento: this.lancamentoService.tipoLancamentoSelecionado,
      tipoEnvio:TipoEnvioEnum.LOCAL,
      subAgrupamento: data
    }
  }

  validar(data: SubAgrupamento[]):boolean{
    if(!data.length){
      this.presentAlert("Erro","Nenhum animal adicionado.")
      this.lancamentoService.changeStatus(true)
      return false;
    }
    if(!this.lancamentoService.tipoLancamentoSelecionado){
      this.presentAlert("Erro","Tipo de Lançamento deve ser selecionado.")
      this.lancamentoService.changeStatus(true)
      return false;
    }
    return true
  }

  async presentAlert(header:string,message:string) {
    const alert = await this.alertController.create({
      header: header,
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async confirm() {
    let blnRetorno:boolean;
    const alert = await this.alertController.create({
      header: "Enviar Lançamento",
      // subHeader: 'Subtitle',
      message: "Você realmente deseja enviar o Lançamento ?",
      buttons: [{
        text:'Cancelar',
        role:'cancel',
        cssClass:'danger',
        handler:()=>{
          blnRetorno = false;
        }},{
          text:'Sim',
          cssClass:'success',
          handler:()=>{
            blnRetorno = true;
          }}
      ]
    });
    alert.present()
    await alert.onWillDismiss();
    return blnRetorno;
  }

  getTipoEnvio(){
    return this.lancamento?this.lancamento.tipoEnvio:TipoEnvioEnum.LOCAL
  }

  get lancamento(){
    return this._lancamento;
  }

  set lancamento(lancamento: LancamentosDTO){
    this._lancamento = lancamento
  }
  get isTipoEnvioLocal(){
    return (this.lancamento.tipoEnvio === TipoEnvioEnum.LOCAL)?true:false;
  }
  public get tipoEnvioEnum(): typeof TipoEnvioEnum {
    return TipoEnvioEnum; 
  }
}

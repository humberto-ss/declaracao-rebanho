import { Component, OnInit } from '@angular/core';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { SubAgrupamento } from 'src/app/DTOs/subAgrupamentoDTO';
import { TipoExploracaoDTO } from 'src/app/DTOs/tipoExploracaoDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { TipoEnvioEnum } from 'src/app/util/tipoEnvioEnum';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { AlertController, NavController } from '@ionic/angular';
import { Util } from '../../../../util/util'
import * as html2pdf from 'html2pdf.js';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-declaracao',
  templateUrl: './declaracao.page.html',
  styleUrls: ['./declaracao.page.scss'],
})
export class DeclaracaoPage implements OnInit {

  private tipoExploracao:TipoExploracaoDTO[]=[]
  private _declaracao:DeclaracaoDTO;
  private pdfContent = null;
  util:Util;
  constructor(
    private declaracaoService:DeclaracaoService,
    private alertController:AlertController,
    private navControl: NavController) { 
    this.util = new Util();
  }

  ngOnInit() {
    this.tipoExploracao = this.declaracaoService.tipoExploracaoEspAnimal;
    
    this.obtemDadosAtualizados();
  }

  obtemDadosAtualizados(){
    this.obtemDeclaracaoSelecionada();
    this.atualizaTipoExploracao();
    this.atualizaTipoFinalidadeCriacao();
  }

  private obtemDeclaracaoSelecionada(){
    this._declaracao = this.declaracaoService.declaracaoSelecionada;
  }

  private atualizaTipoExploracao(){
    if(this.declaracao && this.declaracao.tipoExploracao){
      this.declaracaoService.tipoExploracaoSelecionado = this.declaracao.tipoExploracao
    }
  }

  private atualizaTipoFinalidadeCriacao(){
    if(this.declaracao && this.declaracao.tipoFinalidadeCriacao){
      this.declaracaoService.tipoFinalidadeSelecionado = this.declaracao.tipoFinalidadeCriacao
    }
  }

  salvarDeclaracao(data: SubAgrupamento[]){
    if(!this.validar(data))
      return
    this._declaracao = this.populaDeclaracao(data);
    this.declaracaoService.salvar(this._declaracao);
  }
  enviarDeclaracao(data: SubAgrupamento[]){
    if(!this.validar(data))
      return
    
    if(!this.declaracao)
      this._declaracao = this.populaDeclaracao(data)
  
    this.declaracaoService.enviar(this._declaracao)
    this.navControl.navigateBack(`propriedade/agronegocio/${this.declaracaoService.agronegocioSelecionado.id}`); 
  }

  populaDeclaracao(data:SubAgrupamento[]):DeclaracaoDTO{
    return {
      id:(this.declaracao)?this.declaracao.id:null,
      idAgronegocio: this.declaracaoService.agronegocioSelecionado.id,
      dtDeclaracao: this.util.getDate(),
      idTipoExploracao: this.declaracaoService.tipoExploracaoSelecionado.id,
      tipoExploracao:this.declaracaoService.tipoExploracaoSelecionado,
      idTipoFinalidadeCriacao: this.declaracaoService.tipoFinalidadeSelecionado.id,
      tipoFinalidadeCriacao:this.declaracaoService.tipoFinalidadeSelecionado,
      tipoEnvio:TipoEnvioEnum.LOCAL,
      subAgrupamento:data
    }
  }

  private validar(data: SubAgrupamento[]):boolean{
    let blnRetorno: boolean = true;
    if(data.length<=0){
      this.erroAlert("ERRO", "Nenhum Animal Adicionado")
      this.declaracaoService.changeStatus(true);
      return false;
    }
    if(!this.declaracaoService.tipoFinalidadeSelecionado){
      this.erroAlert("ERRO", "Uma Finalidade de criação deve ser selecionada.")
      this.declaracaoService.changeStatus(true);
      return false;
    }
    if(!this.declaracaoService.tipoExploracaoSelecionado){
      this.erroAlert("ERRO", "Um Tipo de Exploracao deve ser selecionado.")
      this.declaracaoService.changeStatus(true);
      return false;
    }

    data.forEach(
      subAgrup => {
        if(subAgrup.quantidade<0){
          let msg = "Não é possível declarar valores negativos, para alterar os valores deverá ser criado novos lançamentos."
          this.erroAlert("ERRO - Valor Negativo", msg)
          this.declaracaoService.changeStatus(true);
          blnRetorno = false
        }
      })
      return blnRetorno;
  }
  downloadPDF(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs; 
    
    const docDef={
      pageSize:'A4',
      pageOrientation:'portrait',
      pageMargins:[20,10,40,60],
      content:[
        {
          table:{
            body:[
              ['Coluna correta']
            ]
          }
        }
      ]
    }
    pdfMake.createPdf(docDef).download('declaracao.pdf');
  }


  async erroAlert(header:string,message:string) {
    const alert = await this.alertController.create({
      header: header,
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  get declaracao(){
    return this._declaracao
  }
  getTipoEnvio(){
    return this.declaracao?this.declaracao.tipoEnvio:TipoEnvioEnum.LOCAL;
  }
  
  public get tipoEnvioEnum(): typeof TipoEnvioEnum {
    return TipoEnvioEnum; 
  }

  htmlToPdf(){
    const options ={
      filename:'comprovante_declaracao.pdf',
      image:{type:'jpeg'}, //png,webp
      html2canvas:{},//windownWidth:2480, windowHeight: 3508
      jsPDF:{orientation: 'portrait'}
    };
    const content: Element = document.getElementById('grid-comprovante');

    html2pdf()
      .from(content)
      .set(options)
      .save()

  }
  exportPdf(){
    const div = document.getElementById('grid-comprovante');
    const options = { background: 'white', height: 845, width: 700 };
    domtoimage.toPng(div, options).then((dataUrl) => {
        
        //Initialize JSPDF
        const doc = new jsPDF('p', 'mm', 'a4');
        //Add image Url to PDF
        // doc.addImage(dataUrl, 'PNG', 0, 0, 210, 340);
        doc.addImage(dataUrl, 'PNG', 0, 0, 210, 340);
        doc.save('pdfDocument.pdf');
    })
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AgronegocioDTO } from 'src/app/DTOs/agronegocioDTO';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { ConstantsApp} from '../../util/constants-app';
import * as html2pdf from 'html2pdf.js';
import { ControllerService } from 'src/app/services/controller.service';
import { AgrupamentoDTO } from 'src/app/DTOs/agrupamentoDTO';

@Component({
  selector: 'app-comprovante',
  templateUrl: './comprovante.component.html',
  styleUrls: ['./comprovante.component.scss'],
})
export class ComprovanteComponent implements OnInit {
  @Input() declaracaoSelecionada: DeclaracaoDTO;
  agronegocio:AgronegocioDTO;
  nomeSecretaria = ConstantsApp.NOME_SECRETARIA;
  nomeDepartamento = ConstantsApp.NOME_DEPARTAMENTO;
  agrupamentos: AgrupamentoDTO[] =[];
  constructor(private declaracaoService:DeclaracaoService, private controllerService:ControllerService) { 
  
  }

  ngOnInit() {
    this.obtemDadosParaComprovante();
  }

  obtemDadosParaComprovante(){
    this.agronegocio = this.declaracaoService.agronegocioSelecionado;
    this.agrupamentos = this.controllerService.getAgrupamentosZeradoPorEspecie(this.agronegocio.idEspecieAnimal)
    for(let sub of this.declaracaoSelecionada.subAgrupamento){
      this.agrupamentos.forEach( agrupamento=>
        {
          agrupamento.subAgrupamento.forEach(subagrupamento =>
            {
              if(sub.idSubAgrupamento === subagrupamento.idSubAgrupamento){
                subagrupamento.quantidade = sub.quantidade
                console.log(sub.quantidade)
              }
            })
        })
    }
  }

  htmlToPdf(){
    const options ={
      filename:'comprovante_declaracao.pdf',
      image:{type:'jpeg'}, //png,webp
      html2canvas:{},
      jsPDF:{orientation: 'landscape'}
    };
    const content: Element = document.getElementById('grid-comprovante');
    content.innerHTML = ''
    html2pdf()
      .from(content)
      .set(options)
      .save()

  }
}

import { Component, OnInit } from '@angular/core';
import { LancamentosDTO } from 'src/app/DTOs/lancamentosDTO';
import { LancamentoService } from 'src/app/services/lancamento.service';
// import { LancamentoModel} from './lancamento.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss'],
})
export class LancamentosComponent implements OnInit {
  lancamentosDTO: LancamentosDTO[]
  // lancamentos: LancamentoModel[] =[]
  constructor(private lancamentoService:LancamentoService) { 

  }
  
  ngOnInit() {
    this.lancamentosDTO =  this.lancamentoService.obtemLancamentosPorAgronegocio()
    // this.transfereDTOtoModel();
  }
  
  ionViewWillEnter(){
  }
  
  // transfereDTOtoModel(){
  //   for(let lancDTO of this.lancamentosDTO){
  //     let lancamentoModel: LancamentoModel;
  //     var qtd: number = 0;
  //     for(let sub of lancDTO.subAgrupamento){
  //         qtd +=sub.quantidade;
  //     }
  //     lancamentoModel = new LancamentoModel(
  //       lancDTO.id,
  //       lancDTO.dtLancamento,
  //       this.lancamentoService.tiposLancamentos.find(tipo => tipo.id === lancDTO.tipoLancamento),
        
  //     )
  //     this.lancamentos.push(lancamentoModel)
  //   }
  // }
}

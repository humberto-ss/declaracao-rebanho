import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LancamentosDTO } from 'src/app/DTOs/lancamentosDTO';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { TipoEnvioEnum } from '../../util/tipoEnvioEnum'
// import { LancamentoModel} from './lancamento.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss'],
})
export class LancamentosComponent implements OnInit {
  lancamentosDTO:  LancamentosDTO[]
  constructor(private lancamentoService:LancamentoService) { 
  }
  
  ngOnInit() {
    this.lancamentoService.obtemLancamentosPorAgronegocio()
    .then(data => this.lancamentosDTO = data)
    .catch(error=>console.log("Erro ao obter Lancamentos por Agronegocio",error));
  }

  selectedLancamento(lancamento: LancamentosDTO){
    this.lancamentoService.lancamentoSelecionado = lancamento;
  }

  get tipoEnvio(){
    return TipoEnvioEnum;
  }
  
}

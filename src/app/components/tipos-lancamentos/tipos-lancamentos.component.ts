import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { TiposLancamentosModel } from './tipos-lancamentos.model';

@Component({
  selector: 'app-tipos-lancamentos',
  templateUrl: './tipos-lancamentos.component.html',
  styleUrls: ['./tipos-lancamentos.component.scss'],
})
export class TiposLancamentosComponent implements OnInit {
  tiposLancamentosModel : TiposLancamentosModel[];
  tipoLancamentoSelecionado : TiposLancamentosModel;

  constructor(private lancamentoService:LancamentoService) { }

  ngOnInit() {
    this.tiposLancamentosModel = this.lancamentoService.tiposLancamentos;
  }

  setTipoLancamentoSelecionado(tipoLancamentoSelecionado:TiposLancamentosModel){
    this.lancamentoService.tipoLancamentoSelecionado = tipoLancamentoSelecionado;
  }

}


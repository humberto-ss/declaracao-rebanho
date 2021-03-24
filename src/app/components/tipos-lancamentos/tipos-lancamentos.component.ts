import { Component, OnInit } from '@angular/core';
import { TipoLancamentoDTO } from 'src/app/DTOs/tipoLancamentoDTO';
import { LancamentoService } from 'src/app/services/lancamento.service';

@Component({
  selector: 'app-tipos-lancamentos',
  templateUrl: './tipos-lancamentos.component.html',
  styleUrls: ['./tipos-lancamentos.component.scss'],
})
export class TiposLancamentosComponent implements OnInit {
  tiposLancamentos : TipoLancamentoDTO[] = [];
  tipoLancamentoSelecionado : TipoLancamentoDTO;

  constructor(private lancamentoService:LancamentoService) { }

  ngOnInit() {
    this.tiposLancamentos = this.lancamentoService.tiposLancamentos;
    this.tipoLancamentoSelecionado = this.lancamentoService.tipoLancamentoSelecionado
  }

  setTipoLancamentoSelecionado(tipoLancamentoSelecionado:TipoLancamentoDTO){
    this.lancamentoService.tipoLancamentoSelecionado = tipoLancamentoSelecionado;
    this.lancamentoService.changeStatus(true)
  }

}


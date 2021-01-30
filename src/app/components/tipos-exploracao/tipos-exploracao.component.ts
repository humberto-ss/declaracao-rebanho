import { Component, OnInit } from '@angular/core';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { TipoExploracaoModel } from './tipo-exploracao.model';

@Component({
  selector: 'app-tipos-exploracao',
  templateUrl: './tipos-exploracao.component.html',
  styleUrls: ['./tipos-exploracao.component.scss'],
})
export class TiposExploracaoComponent implements OnInit {
  private tiposExploracao: TipoExploracaoModel[];


  constructor(private declaracaoService:DeclaracaoService) { }

  ngOnInit() {
    this.tiposExploracao = this.declaracaoService.tipoExploracao;
  }

}

import { Component, OnInit } from '@angular/core';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { DeclaracaoModel } from './declaracao.model';

@Component({
  selector: 'app-declaracoes',
  templateUrl: './declaracoes.component.html',
  styleUrls: ['./declaracoes.component.scss'],
})
export class DeclaracoesComponent implements OnInit {
  declaracoes: DeclaracaoModel[];

  constructor(private declaracaoService: DeclaracaoService) {}


  ngOnInit() {
    this.declaracoes =  this.declaracaoService.populaDeclaracoesComponent();
  }

}

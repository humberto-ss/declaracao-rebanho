import { Component, OnInit } from '@angular/core';
import { DeclaracaoDTO } from 'src/app/DTOs/declaracaoDTO';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { DeclaracaoModel } from './declaracao.model';

@Component({
  selector: 'app-declaracoes',
  templateUrl: './declaracoes.component.html',
  styleUrls: ['./declaracoes.component.scss'],
})
export class DeclaracoesComponent implements OnInit {
  // declaracoes: DeclaracaoModel[];
  declaracoes: DeclaracaoDTO[];

  constructor(private declaracaoService: DeclaracaoService) {
  }
  
  
  ngOnInit() {
    this.declaracoes =  this.declaracaoService.obtemDeclaracoesPorAgronegocio();
  }


}

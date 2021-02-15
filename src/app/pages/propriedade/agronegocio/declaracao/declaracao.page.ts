import { Component, OnInit } from '@angular/core';
import { DeclaracaoService } from 'src/app/services/declaracao.service';

@Component({
  selector: 'app-declaracao',
  templateUrl: './declaracao.page.html',
  styleUrls: ['./declaracao.page.scss'],
})
export class DeclaracaoPage implements OnInit {

  constructor(private declaracaoService:DeclaracaoService) { }

  ngOnInit() {
    console.log(this.declaracaoService.tipoExploracao)
  }

}

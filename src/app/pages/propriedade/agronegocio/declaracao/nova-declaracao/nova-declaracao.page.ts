import { Component, OnInit } from '@angular/core';
import { DeclaracaoService } from 'src/app/services/declaracao.service';

@Component({
  selector: 'app-nova-declaracao',
  templateUrl: './nova-declaracao.page.html',
  styleUrls: ['./nova-declaracao.page.scss'],
})
export class NovaDeclaracaoPage implements OnInit {

  constructor(private declaracaoService:DeclaracaoService) { }

  ngOnInit() {
    
  }

}

import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PropriedadeService } from '../../services/propriedade.service'
import { PropriedadesRuraisModel } from './propriedades-rurais.model';

@Component({
  selector: 'app-propriedades-rurais',
  templateUrl: './propriedades-rurais.component.html',
  styleUrls: ['./propriedades-rurais.component.scss']
})
export class PropriedadesRuraisComponent implements OnInit {
  propriedades: PropriedadesRuraisModel[];
  propriedadeSelecionada: PropriedadesRuraisModel;
  // @Input() propriedade: PropriedadesRuraisModel;

  constructor(private propriedadeService : PropriedadeService) { 
    
  }

  ngOnInit() {
    this.propriedades = this.propriedadeService.populaPropriedadesComponent();
    this.propriedadeSelecionada = this.propriedades[0];
    // this.propriedade = this.propriedades[0];
    this.propriedadeService.changePropriedade(this.propriedades[0]);
  }
  setPropriedadeSelecionada(): void{
    // this.propriedade = this.propriedadeSelecionada;
    this.propriedadeService.changePropriedade(this.propriedadeSelecionada);
  }

}

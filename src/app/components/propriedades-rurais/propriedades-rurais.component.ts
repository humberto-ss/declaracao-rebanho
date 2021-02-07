import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PropriedadeRuralDTO } from 'src/app/DTOs/propriedadeRuralDTO';
import { PropriedadeService } from '../../services/propriedade.service'


@Component({
  selector: 'app-propriedades-rurais',
  templateUrl: './propriedades-rurais.component.html',
  styleUrls: ['./propriedades-rurais.component.scss']
})
export class PropriedadesRuraisComponent implements OnInit {
  propriedades: PropriedadeRuralDTO[];
  propriedadeSelecionada: PropriedadeRuralDTO;
  // @Input() propriedade: PropriedadesRuraisModel;

  constructor(private propriedadeService : PropriedadeService) { 
    
  }

  ngOnInit() {
    this.propriedades = this.propriedadeService.populaPropriedades();
    this.propriedadeSelecionada = this.propriedades[0];
    // this.propriedade = this.propriedades[0];
    this.propriedadeService.changePropriedade(this.propriedades[0]);
  }
  setPropriedadeSelecionada(): void{
    // this.propriedade = this.propriedadeSelecionada;
    this.propriedadeService.changePropriedade(this.propriedadeSelecionada);
  }

}

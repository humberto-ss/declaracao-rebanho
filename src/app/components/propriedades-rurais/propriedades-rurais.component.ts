import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropriedadeRuralDTO } from 'src/app/DTOs/propriedadeRuralDTO';
import { PropriedadeService } from '../../services/propriedade.service'


@Component({
  selector: 'app-propriedades-rurais',
  templateUrl: './propriedades-rurais.component.html',
  styleUrls: ['./propriedades-rurais.component.scss']
})
export class PropriedadesRuraisComponent implements OnInit {
  @Input() propriedades: PropriedadeRuralDTO[];
  @Input() propriedadeSelecionada: PropriedadeRuralDTO;

  isLoading:boolean=false;
  constructor(private propriedadeService : PropriedadeService) { }

  ngOnInit() {
    if(this.propriedadeSelecionada)
      this.setPropriedadeSelecionada();
  }

  setPropriedadeSelecionada(): void{
    this.propriedadeService.changePropriedade(this.propriedadeSelecionada);
  }


}

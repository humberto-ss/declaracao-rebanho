import { Component, OnInit } from '@angular/core';
import { AgronegocioService } from 'src/app/services/agronegocio.service';
import { AgronegocioModel } from './agronegocio.model';

@Component({
  selector: 'app-agronegocios',
  templateUrl: './agronegocios.component.html',
  styleUrls: ['./agronegocios.component.scss'],
})
export class AgronegociosComponent implements OnInit {
  agronegocios : AgronegocioModel[];
  constructor(private agronegocioService:AgronegocioService) { 
    
  }
  
  ngOnInit() {
    this.agronegocios=this.agronegocioService.agronegociosPropriedade
    this.agronegocioService.agronegociosToComponent.subscribe(
      () =>{
        this.agronegocios = this.agronegocioService.agronegociosPropriedade
      }
    )
  }

}

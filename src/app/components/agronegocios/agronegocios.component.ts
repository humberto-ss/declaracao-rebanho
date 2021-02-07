import { Component, OnInit } from '@angular/core';
import { AgronegocioDTO } from 'src/app/DTOs/agronegocioDTO';
import { AgronegocioService } from 'src/app/services/agronegocio.service';


@Component({
  selector: 'app-agronegocios',
  templateUrl: './agronegocios.component.html',
  styleUrls: ['./agronegocios.component.scss'],
})
export class AgronegociosComponent implements OnInit {
  agronegocios : AgronegocioDTO[];
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

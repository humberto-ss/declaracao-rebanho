import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AgronegocioDTO } from 'src/app/DTOs/agronegocioDTO';
import { AgronegocioService } from 'src/app/services/agronegocio.service';
import { LancamentoService } from 'src/app/services/lancamento.service';

@Component({
  selector: 'app-agronegocio',
  templateUrl: './agronegocio.page.html',
  styleUrls: ['./agronegocio.page.scss'],
})
export class AgronegocioPage implements OnInit {
  agronegocio: AgronegocioDTO;
  blnShowLancamento: boolean = false;
  blnShowDeclaracao: boolean = false;


  constructor(
    private actvRouter: ActivatedRoute,
    private AgronegocioService: AgronegocioService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.blnShowLancamento = true;
    this.obtemAgronegocio();
  }
  
  segmentChanged(ev: any){
    var blnSegment: boolean = true;
    (ev.target.value ==='lancamentos')? blnSegment = true: blnSegment=false;
    this.blnShowLancamento = blnSegment;
    this.blnShowDeclaracao = !blnSegment;  
  }

  private obtemAgronegocio(){
    this.actvRouter.paramMap.subscribe(
      paramMap =>{
        if(!paramMap.has('agronegocioId')){
           this.navController.navigateBack('propriedade');
           return;
        }
        this.agronegocio = this.AgronegocioService.getAgronegociosPorId(+paramMap.get('agronegocioId'))
  
        //Se nao localizou o agronegocio, retorna
        if(!this.agronegocio){
          this.navController.navigateBack('propriedade');
          return;
        }
        this.AgronegocioService.setAgronegocioSelecionado(this.agronegocio);
      });
  }


}

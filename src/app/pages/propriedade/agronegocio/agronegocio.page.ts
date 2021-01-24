import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AgronegocioModel } from 'src/app/components/agronegocios/agronegocio.model';
import { AgronegocioService } from 'src/app/services/agronegocio.service';

@Component({
  selector: 'app-agronegocio',
  templateUrl: './agronegocio.page.html',
  styleUrls: ['./agronegocio.page.scss'],
})
export class AgronegocioPage implements OnInit {
  agronegocio: AgronegocioModel;
  blnShowLancamento: boolean = false;
  blnShowDeclaracao: boolean = false;
  constructor(
    private actvRouter: ActivatedRoute,
    private AgronegocioService: AgronegocioService,
    private navController: NavController
  ) { }

  ngOnInit() {
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
      });
      this.blnShowLancamento = true;
  }
  segmentChanged(ev: any){
    var blnSegment: boolean = true;
     (ev.target.value ==='lancamentos')? blnSegment = true: blnSegment=false;
      this.blnShowLancamento = blnSegment;
      this.blnShowDeclaracao = !blnSegment;  
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AgronegocioDTO } from 'src/app/DTOs/agronegocioDTO';
import { AgronegocioService } from 'src/app/services/agronegocio.service';
import { DeclaracaoService } from 'src/app/services/declaracao.service';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { TipoEnvioEnum } from 'src/app/util/tipoEnvioEnum';

@Component({
  selector: 'app-agronegocio',
  templateUrl: './agronegocio.page.html',
  styleUrls: ['./agronegocio.page.scss'],
})
export class AgronegocioPage implements OnInit {
  agronegocio: AgronegocioDTO;
  blnShowLancamento: boolean = false;
  blnShowDeclaracao: boolean = false;
  private subs: Subscription;


  constructor(
    private actvRouter: ActivatedRoute,
    private AgronegocioService: AgronegocioService,
    private navController: NavController,
    private lancamentoService: LancamentoService,
    private declaracaoService: DeclaracaoService
  ) {}

  ngOnInit() {
    this.blnShowDeclaracao = true;
    this.obtemAgronegocio();
  }
  
  segmentChanged(ev: any){
    // var blnSegment: boolean;
    if(ev.target.value ==='lancamentos'){
      this.blnShowDeclaracao = false;
      this.blnShowLancamento = true;
    }else{
      this.blnShowDeclaracao = true;
      this.blnShowLancamento = false;
    }
  }

  private obtemAgronegocio(){
    this.subs = this.actvRouter.paramMap.subscribe(
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

  ngOnDestroy(){
    if(this.subs){
      this.subs.unsubscribe()
    }
  }

  zeraLancamento(){
    this.lancamentoService.lancamentoSelecionado = null;
    this.lancamentoService.tipoLancamentoSelecionado = null;
    this.lancamentoService.isAlterado = false;
    this.lancamentoService.isPodeEnviar = false;
    
  }

  zeraDeclaracao(){
    this.declaracaoService.declaracaoSelecionada = null;
    this.declaracaoService.tipoExploracaoSelecionado = null;
    this.declaracaoService.tipoFinalidadeSelecionado = null;
    this.declaracaoService.isAlterado=false;
    this.declaracaoService.isPodeEnviar=false;
  }

  public get tipoEnvioEnum(): typeof TipoEnvioEnum {
    return TipoEnvioEnum; 
  }
}

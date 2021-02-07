import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { LancamentosDTO } from "src/app/DTOs/lancamentosDTO";
import { LancamentoService } from "src/app/services/lancamento.service";

@Component({
  selector: "app-lancamento",
  templateUrl: "./lancamento.page.html",
  styleUrls: ["./lancamento.page.scss"],
})
export class LancamentoPage implements OnInit {
  lancamento: LancamentosDTO;
  constructor(
    private lancamentoService: LancamentoService,
    private actvRouter: ActivatedRoute,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.obtemLancamentoSelecionado();
  }


  obtemLancamentoSelecionado(){
    this.actvRouter.paramMap.subscribe(
      paramMap =>{
        if(!paramMap.has('lancamentoId')){
           this.navController.navigateBack('propriedade');
           return;
        }
        this.lancamento = this.lancamentoService.getLancamentoPorId(+paramMap.get('lancamentoId'))
  
        //Se nao localizou o Lancamento, retorna
        if(!this.lancamento){
          this.navController.navigateBack('propriedade');
          return;
        }
      }
    )

    
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropriedadeRuralDTO } from 'src/app/DTOs/propriedadeRuralDTO';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.page.html',
  styleUrls: ['./propriedade.page.scss'],
})
export class PropriedadePage implements OnInit, OnDestroy {
  propriedadesPage: PropriedadeRuralDTO[];
  selecionada: PropriedadeRuralDTO;
  isLoading = false;
  private subs: Subscription;
  constructor(private propriedadeService: PropriedadeService) { }

  ngOnInit() {
    this.propriedadeService.propriedades.subscribe(props =>{
      this.propriedadesPage = props;
    })
    
  }

  ionViewWillEnter(){
    if(this.selecionada)
      return;

    this.isLoading= true;
    this.subs= this.propriedadeService.populaPropriedades().subscribe( 
      ()=>{
        this.isLoading=false;
        if(!this.selecionada && this.propriedadesPage){
          this.selecionada = this.propriedadesPage[0];
        }
      }
    )
    
  }

  ngOnDestroy(){
    if(this.subs){
      this.subs.unsubscribe()
    }
  }

}

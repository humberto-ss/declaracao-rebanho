import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { PropriedadeRuralDTO } from '../DTOs/propriedadeRuralDTO';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  
  private _connection:boolean = false;
  private _propriedades: PropriedadeRuralDTO[];

  constructor(
    private http:HttpClient
  ) {  }

   init(){
   }

  getAllPropriedades(): Observable<PropriedadeRuralDTO[]> {
    return this.http.get<PropriedadeRuralDTO[]>(
      "https://declaracao-rebanho-default-rtdb.firebaseio.com/propriedade.json");
  }



}

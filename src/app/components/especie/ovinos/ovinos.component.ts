import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriasEnum } from 'src/app/util/categoriasEnum';
import { SubCategoriaEnum } from 'src/app/util/subCategoriaEnum';
import {SubAgrupamento} from '../../../DTOs/subAgrupamentoDTO';
@Component({
  selector: 'app-ovinos',
  templateUrl: './ovinos.component.html',
  styleUrls: ['./ovinos.component.scss'],
})
export class OvinosComponent implements OnInit {
@Output() salvarOvinos = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  salvar(event){
    var subAgrupamento = [
      {
        idAgrupamento: CategoriasEnum.ate_12_meses.id, idSubAgrupamento: SubCategoriaEnum.femea.id,quantidade: 15
      }
    ]
      this.salvarOvinos.emit(subAgrupamento);
  }
}

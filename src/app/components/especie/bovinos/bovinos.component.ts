import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LancamentosDTO } from 'src/app/DTOs/lancamentosDTO';
import { CategoriasEnum } from 'src/app/util/categoriasEnum';
import { SubCategoriaEnum } from 'src/app/util/subCategoriaEnum';
import { Util } from 'src/app/util/util';
import {SubAgrupamento} from '../../../DTOs/subAgrupamentoDTO'

@Component({
  selector: 'app-bovinos',
  templateUrl: './bovinos.component.html',
  styleUrls: ['./bovinos.component.scss'],
})
export class BovinosComponent implements OnInit {
  private lancamentoDtoInclusao: LancamentosDTO;
  subAgrupamento: SubAgrupamento[];
  util:Util = new Util();
  dataTemplate: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  @Output() salvarBovinos = new EventEmitter();
  @Input() lancamentoSelecionado;
  blnEdit: boolean = true;

  constructor() { }

  ngOnInit() {
    this.populaData();
  }

  populaData(){
    if(!this.lancamentoSelecionado)
      return
   this.blnEdit = false;

    for(let sub of this.lancamentoSelecionado.subAgrupamento){
      switch (sub.idAgrupamento){
        case CategoriasEnum.ate_12_meses.id:        
          (sub.idSubAgrupamento === SubCategoriaEnum.femea.id)? this.dataTemplate[0] = sub.quantidade :this.dataTemplate[1] = sub.quantidade;
          break;
        case CategoriasEnum.de_13_a_24_meses.id:
          (sub.idSubAgrupamento === SubCategoriaEnum.femea.id)? this.dataTemplate[2] = sub.quantidade :this.dataTemplate[3] = sub.quantidade;
        break;
        case CategoriasEnum.de_25_a_36_meses.id:
          (sub.idSubAgrupamento === SubCategoriaEnum.femea.id)? this.dataTemplate[4] = sub.quantidade :this.dataTemplate[5] = sub.quantidade;
        break;
        case CategoriasEnum.mais_de_36_meses.id:
          (sub.idSubAgrupamento === SubCategoriaEnum.femea.id)? this.dataTemplate[6] = sub.quantidade :this.dataTemplate[7] = sub.quantidade;
        break;
        default:
      }
    }
  }

  public get categoriasEnum(): typeof CategoriasEnum {
    return CategoriasEnum; 
  }

  public get subCategoriasEnum(): typeof SubCategoriaEnum {
    return SubCategoriaEnum; 
  }


  salvar(event){
    this.populaSubAgrupamentos(this.dataTemplate);
    this.salvarBovinos.emit(this.subAgrupamento);
  }

  private populaSubAgrupamentos(dataBovinos: number[]) {
    this.subAgrupamento = [
      {
        idAgrupamento: CategoriasEnum.ate_12_meses.id, idSubAgrupamento: SubCategoriaEnum.femea.id,quantidade: dataBovinos[0]
      },{
        idAgrupamento: CategoriasEnum.ate_12_meses.id, idSubAgrupamento: SubCategoriaEnum.macho.id,quantidade: dataBovinos[1]
      },{
        idAgrupamento: CategoriasEnum.de_13_a_24_meses.id, idSubAgrupamento: SubCategoriaEnum.femea.id,quantidade: dataBovinos[2]
      },{
        idAgrupamento: CategoriasEnum.de_13_a_24_meses.id, idSubAgrupamento: SubCategoriaEnum.macho.id,quantidade: dataBovinos[3]
      },{
        idAgrupamento: CategoriasEnum.de_25_a_36_meses.id, idSubAgrupamento: SubCategoriaEnum.femea.id,quantidade: dataBovinos[4]
      },{
        idAgrupamento: CategoriasEnum.de_25_a_36_meses.id, idSubAgrupamento: SubCategoriaEnum.macho.id,quantidade: dataBovinos[5]
      },{
        idAgrupamento: CategoriasEnum.mais_de_36_meses.id, idSubAgrupamento: SubCategoriaEnum.femea.id,quantidade: dataBovinos[6]
      },{
        idAgrupamento: CategoriasEnum.mais_de_36_meses.id, idSubAgrupamento: SubCategoriaEnum.macho.id,quantidade: dataBovinos[7]
      },
    ];
  }

  add(id: number) {
    switch (id) {
      case 0:
        this.dataTemplate[0] += 1;
        break;
      case 1:
        this.dataTemplate[1] += 1;
        break;
      case 2:
        this.dataTemplate[2] += 1;
        break;
      case 3:
        this.dataTemplate[3] += 1;
        break;
      case 4:
        this.dataTemplate[4] += 1;
        break;
      case 5:
        this.dataTemplate[5] += 1;
        break;
      case 6:
        this.dataTemplate[6] += 1;
        break;
      case 7:
        this.dataTemplate[7] += 1;
        break;
      default:
    }
  }
  remove(id: number) {
    switch (id) {
      case 0:
        if (this.dataTemplate[0] !== 0) {
          this.dataTemplate[0] -= 1;
        }
        break;
      case 1:
        if (this.dataTemplate[1] !== 0) {
          this.dataTemplate[1] -= 1;
        }
        break;
      case 2:
        if (this.dataTemplate[2] !== 0) {
          this.dataTemplate[2] -= 1;
        }
        break;
      case 3:
        if (this.dataTemplate[3] !== 0) {
          this.dataTemplate[3] -= 1;
        }
        break;
      case 4:
        if (this.dataTemplate[4] !== 0) {
          this.dataTemplate[4] -= 1;
        }
        break;
      case 5:
        if (this.dataTemplate[5] !== 0) {
          this.dataTemplate[5] -= 1;
        }
        break;
      case 6:
        if (this.dataTemplate[6] !== 0) {
          this.dataTemplate[6] -= 1;
        }
        break;
      case 7:
        if (this.dataTemplate[7] !== 0) {
          this.dataTemplate[7] -= 1;
        }
        break;
      default:
    }
  }
}

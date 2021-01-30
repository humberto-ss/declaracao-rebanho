import { Injectable } from "@angular/core";
import { LancamentosDTO } from "src/app/DTOs/lancamentosDTO";
import { Util } from "src/app/util/util";
import { CategoriasEnum } from '../../../../../util/categoriasEnum';
import { SubCategoriaEnum } from '../../../../../util/subCategoriaEnum';

@Injectable({
  providedIn: "root",
})
export class BovinosTemplate {
  private lancamentoDtoInclusao: LancamentosDTO;
  subAgrupamento;
  util:Util = new Util();

  constructor() {}

  conteudoHtml() {
    let data = `
    <ion-grid>
      <ion-row>
        <ion-col>
          Um teste que deu certo
        </ion-col>
      </ion-row>
    </ion-grid>
    `;
    return data;
  }

  populaDTO(idAgronegocio: number, dataBovinos: number[]) {
    this.populaSubAgrupamentos(dataBovinos);
    this.populaLancamento(idAgronegocio);

    console.log(
      this.lancamentoDtoInclusao
    );
    return this.lancamentoDtoInclusao;
  }

  private populaLancamento(idAgronegocio: number) {
    this.lancamentoDtoInclusao = {
      id: null,
      idAgronegocio: idAgronegocio,
      dtLancamento: this.util.getDate(),
      tipoLancamento: 1,
      subAgrupamento: this.subAgrupamento,
    };
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
}

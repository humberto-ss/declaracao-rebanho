import { DeclaracaoModel } from "../components/declaracoes/declaracao.model";
import { TipoExploracaoModel } from "../components/tipos-exploracao/tipo-exploracao.model";
import { CategoriasEnum } from "../util/categoriasEnum";
import { EspecieAnimalEnum } from "../util/especieAnimalEnum";
import { RacaEnum } from "../util/racaEnum";
import { SubCategoriaEnum } from "../util/subCategoriaEnum";
import { PropriedadeRuralDTO } from "../DTOs/propriedadeRuralDTO";
import { EspecieAnimalDTO} from '../DTOs/especieAnimalDTO'
import { AgronegocioDTO} from '../DTOs/agronegocioDTO';
import { TiposLancamentosModel } from "../components/tipos-lancamentos/tipos-lancamentos.model";

export class PopulaDados {
  private propriedadesRurais: PropriedadeRuralDTO[];
  private tiposLancamento: TiposLancamentosModel[]=[];
  constructor() {
    this.propriedadesRurais = this.populaPropriedadesDTO();
    this.tiposLancamento = this.populaTiposLancamentos();

  }

  populaDeclaracoesComponent() {
    return [
      new DeclaracaoModel(0, 0, "01/01/2019", 200, true, "02/01/2019", [
        {
          idSubAgrupamento: SubCategoriaEnum.macho.id,
          idAgrupamento: CategoriasEnum.ate_12_meses.id,
          quantidade: 70,
        },
        {
          idSubAgrupamento: SubCategoriaEnum.femea.id,
          idAgrupamento: CategoriasEnum.ate_12_meses.id,
          quantidade: 130,
        },
      ]),
      new DeclaracaoModel(1, 0, "05/05/2019", 10, false, null, [
        {
          idSubAgrupamento: SubCategoriaEnum.macho.id,
          idAgrupamento: CategoriasEnum.ate_12_meses.id,
          quantidade: 10,
        },
      ]),
      new DeclaracaoModel(3, 0, "01/07/2019", 50, true, '01/07/2019', [
        {
          idSubAgrupamento: SubCategoriaEnum.macho.id,
          idAgrupamento: CategoriasEnum.de_25_a_36_meses.id,
          quantidade: 30,
        },
        {
          idSubAgrupamento: SubCategoriaEnum.femea.id,
          idAgrupamento: CategoriasEnum.de_25_a_36_meses.id,
          quantidade: 20,
        },
      ]),
      new DeclaracaoModel(4, 3, "02/02/2020", 9, true, '02/02/2020', [
        {
          idSubAgrupamento: SubCategoriaEnum.macho.id,
          idAgrupamento: CategoriasEnum.de_25_a_36_meses.id,
          quantidade: 3,
        },
        {
          idSubAgrupamento: SubCategoriaEnum.femea.id,
          idAgrupamento: CategoriasEnum.de_25_a_36_meses.id,
          quantidade: 6,
        },
      ]),
    ];
  }

  populaPropriedadesDTO() {
    return [
      {id:0, nome: "Estrela da Morte", area: 20, inscricaoEstadual: "RS1241412BR"},
      {id:1, nome: "Vulcano", area: 50, inscricaoEstadual: "RS000000BR"},
      {id:2, nome: "Asgard", area: 20, inscricaoEstadual: "RS999999BR"},
      {id:3, nome: "Gothan", area: 99, inscricaoEstadual: "RS984230958234BR"}
    ];
  }

  populaAgronegocios() {
    return[
       {
        id:0,
        idGrupoProdutor:0,
        nomeGrupoProdutor: "LUKE SKYWALKER, ANAKIN SKYWALKER",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[0],
        status: true
      },
      {
        id: 1,
        idGrupoProdutor: 0,
        nomeGrupoProdutor: "LUKE SKYWALKER",
        especieAnimal: EspecieAnimalEnum.bubalinos,
        propriedadeRural:  this.propriedadesRurais[0],
        status: true
      },
      {
        id: 2,
        idGrupoProdutor: 0,
        nomeGrupoProdutor: "LUKE SKYWALKER, PRINCESS LEIA ORGANA SKYWALKER",
        especieAnimal: EspecieAnimalEnum.caprinos,
        propriedadeRural: this.propriedadesRurais[0],
        status: false
      },
      {
        id: 3,
        idGrupoProdutor: 1,
        nomeGrupoProdutor: "SPOCK, JAMES T. KIRK",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[1],
        status: true
      },
      {
        id: 4,
        idGrupoProdutor: 1,
        nomeGrupoProdutor: "SPOCK, JAMES T. KIRK",
        especieAnimal: EspecieAnimalEnum.bubalinos,
        propriedadeRural: this.propriedadesRurais[1],
        status: true
      },
      {
        id: 5,
        idGrupoProdutor: 2,
        nomeGrupoProdutor: "THOR, LOKI",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[2],
        status: true
      },
      {
        id: 6,
        idGrupoProdutor: 2,
        nomeGrupoProdutor: "THOR, LOKI, ODIN, FRIGGA",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[2],
        status: true
      },
      {
        id: 7,
        idGrupoProdutor: 2,
        nomeGrupoProdutor: "LOKI, HELA",
        especieAnimal: EspecieAnimalEnum.abelhas,
        propriedadeRural: this.propriedadesRurais[2],
        status: true
      },
      {
        id: 8,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "BATMAN, BRUCE, ALFRED",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id: 9,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "LUCIUS FOX, BARBARA GORDON, JAMES W. GORDON",
        especieAnimal: EspecieAnimalEnum.abelhas,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id: 10,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "BATMAN, ROBIN",
        especieAnimal: EspecieAnimalEnum.bubalinos,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id: 11,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "DUAS CARAS, CHARADA",
        especieAnimal:EspecieAnimalEnum.caprinos,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id: 12,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "MULHER-GATO, PINGUIM, ESPANTALHO",
        especieAnimal: EspecieAnimalEnum.aves,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id: 13,
        idGrupoProdutor: 3,
        nomeGrupoProdutor: "CORINGA, HARLEY QUINN",
        especieAnimal: EspecieAnimalEnum.abelhas,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      },
      {
        id:14,
        idGrupoProdutor:3,
        nomeGrupoProdutor: "RAS AL GHUL, TALIA AL GHUL",
        especieAnimal: EspecieAnimalEnum.bovinos,
        propriedadeRural: this.propriedadesRurais[3],
        status:true
      }
    ];
  }

  populaLancamentosComponent() {
    return [
      {
        id: 0,
        idAgronegocio: 0,
        dtLancamento: "10/01/2020",
        tipoLancamento: this.tiposLancamento[0],
        blnEnviado:true,
        dtEnvio: '11/01/2020',
        subAgrupamento: [
          {
            idAgrupamento: CategoriasEnum.ate_12_meses.id,
            idSubAgrupamento: SubCategoriaEnum.femea.id,
            quantidade: 10,
          },
          {
            idAgrupamento: CategoriasEnum.ate_12_meses.id,
            idSubAgrupamento: SubCategoriaEnum.macho.id,
            quantidade: 4,
          },
        ],
      },
      {
        id: 3,
        idAgronegocio: 1,
        dtLancamento: "14/01/2020",
        tipoLancamento: this.tiposLancamento[1],
        blnEnviado:false,
        subAgrupamento: [
          {
            idAgrupamento: CategoriasEnum.de_13_a_24_meses.id,
            idSubAgrupamento: SubCategoriaEnum.femea.id,
            quantidade: 99,
          },
          {
            idAgrupamento: CategoriasEnum.de_13_a_24_meses.id,
            idSubAgrupamento: SubCategoriaEnum.macho.id,
            quantidade: 2,
          }
        ]
      }
    ];
  }

  populaTipoExploracao() {
    return [
      new TipoExploracaoModel(0, "Ciclo completo", [
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum.bubalinos.id,
      ]),
      new TipoExploracaoModel(1, "Cria/Recria", [
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum.bubalinos.id,
      ]),
      new TipoExploracaoModel(2, "Terminação", [
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum.bubalinos.id,
      ]),
      new TipoExploracaoModel(3, "Reprodução", [
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum.bubalinos.id,
      ]),
      new TipoExploracaoModel(
        4,
        "Comercial",
        [
          EspecieAnimalEnum.ovinos.id,
          EspecieAnimalEnum.caprinos.id,
          EspecieAnimalEnum.aves.id,
        ],
        [
          RacaEnum.Galinhas,
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
          RacaEnum.Outras_Aves,
        ]
      ),
      new TipoExploracaoModel(
        5,
        "Subsistência",
        [
          EspecieAnimalEnum.ovinos.id,
          EspecieAnimalEnum.caprinos.id,
          EspecieAnimalEnum.aves.id,
        ],
        [
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
        ]
      ),
      new TipoExploracaoModel(
        6,
        "Avozeiro",
        [EspecieAnimalEnum.aves.id],
        [
          RacaEnum.Galinhas,
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
        ]
      ),
      new TipoExploracaoModel(
        7,
        "Matrizeiro",
        [EspecieAnimalEnum.aves.id],
        [
          RacaEnum.Galinhas,
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
        ]
      ),
      new TipoExploracaoModel(
        8,
        "Incubatório",
        [EspecieAnimalEnum.aves.id],
        [
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
        ]
      ),
      new TipoExploracaoModel(
        9,
        "Recria",
        [EspecieAnimalEnum.aves.id],
        [
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
        ]
      ),
      new TipoExploracaoModel(
        10,
        "Estimação/Pet",
        [EspecieAnimalEnum.aves.id],
        [
          RacaEnum.Codornas,
          RacaEnum.Perus,
          RacaEnum.Patos,
          RacaEnum.Marrecos,
          RacaEnum.Gansos,
          RacaEnum.Faisoes,
          RacaEnum.Galinhas_angola,
          RacaEnum.Outras_Aves,
        ]
      ),
    ];
  }
  populaTiposLancamentos(){
    return [
      new TiposLancamentosModel(
        0,
        "Evolução Rebanho",
        false
      ),
      new TiposLancamentosModel(
        1,
        "Sem Movimentação",
        false
      )
    ]
    
  }
}

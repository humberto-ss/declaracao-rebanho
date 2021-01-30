import { AgronegocioModel } from "../components/agronegocios/agronegocio.model";
import { DeclaracaoModel } from "../components/declaracoes/declaracao.model";
import { PropriedadesRuraisModel } from "../components/propriedades-rurais/propriedades-rurais.model";
import { TipoExploracaoModel } from "../components/tipos-exploracao/tipo-exploracao.model";
import { CategoriasEnum } from "../util/categoriasEnum";
import { EspecieAnimalEnum } from "../util/especieAnimalEnum";
import { RacaEnum } from "../util/racaEnum";
import { SubCategoriaEnum } from "../util/subCategoriaEnum";

export class PopulaDados {
  constructor() {}

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
    ];
  }

  populaPropriedadesComponent() {
    return [
      new PropriedadesRuraisModel(0, "Estrela da Morte", 20, "RS1241412BR"),
      new PropriedadesRuraisModel(1, "Vulcano", 50, "RS000000BR"),
      new PropriedadesRuraisModel(2, "Asgard", 88, "RS999999BR"),
      new PropriedadesRuraisModel(3, "Gothan", 99, "RS984230958234BR"),
    ];
  }

  populaAgronegocios() {
    return [
      new AgronegocioModel(
        0,
        0,
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bovinos.nome],
        "LUKE SKYWALKER, ANAKIN SKYWALKER",
        true
      ),
      new AgronegocioModel(
        1,
        0,
        EspecieAnimalEnum.bubalinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bubalinos.nome],
        "LUKE SKYWALKER",
        true
      ),
      new AgronegocioModel(
        2,
        0,
        EspecieAnimalEnum.caprinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.caprinos.nome],
        "LUKE SKYWALKER, PRINCESS LEIA ORGANA SKYWALKER",
        false
      ),
      new AgronegocioModel(
        3,
        1,
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bovinos.nome],
        "SPOCK, JAMES T. KIRK",
        true
      ),
      new AgronegocioModel(
        4,
        1,
        EspecieAnimalEnum.bubalinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bubalinos.nome],
        "SPOCK, JAMES T. KIRK",
        true
      ),
      new AgronegocioModel(
        5,
        2,
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bovinos.nome],
        "THOR, LOKI",
        true
      ),
      new AgronegocioModel(
        6,
        2,
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bovinos.nome],
        "THOR, LOKI, ODIN, FRIGGA",
        true
      ),
      new AgronegocioModel(
        7,
        2,
        EspecieAnimalEnum.abelhas.id,
        EspecieAnimalEnum[EspecieAnimalEnum.abelhas.nome],
        "LOKI, HELA",
        true
      ),
      new AgronegocioModel(
        8,
        3,
        EspecieAnimalEnum.bovinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bovinos.nome],
        "BATMAN, BRUCE, ALFRED",
        true
      ),
      new AgronegocioModel(
        9,
        3,
        EspecieAnimalEnum.abelhas.id,
        EspecieAnimalEnum[EspecieAnimalEnum.abelhas.nome],
        "LUCIUS FOX, BARBARA GORDON, JAMES W. GORDON",
        true
      ),
      new AgronegocioModel(
        10,
        3,
        EspecieAnimalEnum.bubalinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bubalinos.nome],
        "BATMAN, ROBIN",
        true
      ),
      new AgronegocioModel(
        11,
        3,
        EspecieAnimalEnum.caprinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.caprinos.nome],
        "DUAS CARAS, CHARADA",
        true
      ),
      new AgronegocioModel(
        12,
        3,
        EspecieAnimalEnum.aves.id,
        EspecieAnimalEnum[EspecieAnimalEnum.aves.nome],
        "MULHER-GATO, PINGUIM, ESPANTALHO",
        true
      ),
      new AgronegocioModel(
        13,
        3,
        EspecieAnimalEnum.abelhas.id,
        EspecieAnimalEnum[EspecieAnimalEnum.abelhas.nome],
        "CORINGA, HARLEY QUINN",
        true
      ),
      new AgronegocioModel(
        14,
        3,
        EspecieAnimalEnum.bubalinos.id,
        EspecieAnimalEnum[EspecieAnimalEnum.bubalinos.nome],
        "RAS AL GHUL, TALIA AL GHUL",
        true
      ),
    ];
  }

  populaLancamentosComponent() {
    return [
      {
        id: 0,
        idAgronegocio: 0,
        dtLancamento: "10/01/2020",
        tipoLancamento: 0,
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
        tipoLancamento: 1,
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
          },
        ],
      },
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
}

import { TipoEnvioEnum } from '../util/tipoEnvioEnum';
import {EspecieAnimalDTO } from './especieAnimalDTO';
import {PropriedadeRuralDTO} from './propriedadeRuralDTO';

export interface AgronegocioDTO{
    id: number,
    idGrupoProdutor: number,
    nomeGrupoProdutor: string,
    idPropriedade: number,
    idEspecieAnimal: number,
    especieAnimal?: EspecieAnimalDTO,
    propriedadeRural?:PropriedadeRuralDTO,
    status: TipoEnvioEnum
} 
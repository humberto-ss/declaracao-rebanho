import {EspecieAnimalDTO } from './especieAnimalDTO';
import {PropriedadeRuralDTO} from './propriedadeRuralDTO';

export interface AgronegocioDTO{
    id: number,
    idGrupoProdutor: number,
    nomeGrupoProdutor: string,
    especieAnimal: EspecieAnimalDTO,
    propriedadeRural:PropriedadeRuralDTO,
    status: boolean
} 
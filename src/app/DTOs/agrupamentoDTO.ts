import {SubAgrupamento} from './subAgrupamentoDTO'

export interface AgrupamentoDTO{
    idAgrupamento: number,
    idEspecieAnimal: number,
    nome: string,
    subAgrupamento: SubAgrupamento[] 
}
import { RacaDTO } from './racaDTO';
export interface EspecieAnimalDTO{
    id:number,
    nome:string,
    indRebanho: number,
    raca?: RacaDTO[]
}

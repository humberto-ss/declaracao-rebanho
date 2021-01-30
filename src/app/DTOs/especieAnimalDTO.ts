import { RacaDTO } from './racaDTO';
export interface EspecieAnimalDTO{
    id:number,
    nome:string,
    raca?: RacaDTO[]
}

import { RacaDTO } from "src/app/DTOs/racaDTO";

export class TipoExploracaoModel{
    constructor(
        public id: number,
        public nome: string,
        public idEspecieAnimal: number[],
        public raca?:RacaDTO[]
    ){}
}
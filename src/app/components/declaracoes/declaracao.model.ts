import { SubAgrupamento } from "src/app/DTOs/subAgrupamentoDTO";

export class DeclaracaoModel{
    constructor(
        public id: number,
        public idAgronegocio: number,
        public dtDeclaracao: string,
        public qtdDeclarada: number,
        public statusEnvio: boolean,
        public dtEnvio?:string,
        public subAgrupamento?: SubAgrupamento[]
    ){
        
    }
}
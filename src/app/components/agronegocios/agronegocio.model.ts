export class AgronegocioModel{
    constructor(
        public id: number,
        public idPropriedade: number,
        public idEspecieAnimal: number,
        public nomeEspecieAnimal: string,
        public nomeGrupoProdutor: string,
        public status: boolean
    ){}
}
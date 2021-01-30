export class LancamentoModel{
    constructor(
        public id: number,
        public dtLancamento: string,
        public tipoLancamento: number,
        public quantidade: number,
    ){}
}

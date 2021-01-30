import { SubAgrupamento } from './subAgrupamentoDTO'

export interface LancamentosDTO{
    id: number,
    idAgronegocio: number,
    dtLancamento: string,
    tipoLancamento: number,
    subAgrupamento: SubAgrupamento[]
}


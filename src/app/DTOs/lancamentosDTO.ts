import { TiposLancamentosModel } from '../components/tipos-lancamentos/tipos-lancamentos.model';
import { SubAgrupamento } from './subAgrupamentoDTO'

export interface LancamentosDTO{
    id: number,
    idAgronegocio: number,
    dtLancamento: string,
    tipoLancamento: TiposLancamentosModel,
    blnEnviado: boolean,
    dtEnvio?: string,
    subAgrupamento: SubAgrupamento[]
}


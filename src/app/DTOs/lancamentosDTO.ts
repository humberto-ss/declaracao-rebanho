import { SubAgrupamento } from './subAgrupamentoDTO';
import { TipoLancamentoDTO } from './tipoLancamentoDTO';
import { TipoEnvioEnum } from '../util/tipoEnvioEnum';

export interface LancamentosDTO{
    id: number,
    idAgronegocio: number,
    dtLancamento: string,
    idTipoLancamento: number,
    tipoLancamento?: TipoLancamentoDTO,
    tipoEnvio: TipoEnvioEnum,
    dtEnvio?: string,
    subAgrupamento: SubAgrupamento[]
}


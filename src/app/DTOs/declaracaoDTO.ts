import { TipoEnvioEnum } from "../util/tipoEnvioEnum";
import { RacaDTO } from "./racaDTO";
import { SubAgrupamento } from "./subAgrupamentoDTO";
import { TipoExploracaoDTO } from "./tipoExploracaoDTO";
import { TipoFinalidadeDTO } from "./tipoFinalidadeDTO";

export interface DeclaracaoDTO{
    id: number,
    idAgronegocio: number,
    idGrupoProdutor?: number,
    dtDeclaracao: string,
    tipoEnvio: TipoEnvioEnum,
    dtEnvio?:string,
    raca?:RacaDTO,
    idTipoExploracao: number,
    tipoExploracao?:TipoExploracaoDTO,
    idTipoFinalidadeCriacao: number,
    tipoFinalidadeCriacao?: TipoFinalidadeDTO,
    subAgrupamento: SubAgrupamento[]
    
}
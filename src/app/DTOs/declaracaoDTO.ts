import { TipoExploracaoModel } from "../components/tipos-exploracao/tipo-exploracao.model";
import { RacaDTO } from "./racaDTO";
import { SubAgrupamento } from "./subAgrupamentoDTO";

export interface DeclaracaoDTO{
    id: number,
    idAgronegocio: number,
    dtDeclaracao: string,
    statusEnvio: boolean,
    dtEnvio?:string,
    subAgrupamento: SubAgrupamento[],
    raca?:RacaDTO,
    tipoExploracao: TipoExploracaoModel
    // finalidadeCriacao: Fin
}
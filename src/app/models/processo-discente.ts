import { Discente } from "./discente";
import { ProcessoAvaliativo } from "./processo-avaliativo";

export class ProcessoDiscente {
    id: number;
    processoAvaliativo: ProcessoAvaliativo;
    discente: Discente;
}

import { Disciplina } from "./disciplina";
import { ModeloDeAvaliacao } from "./modelo-de-avaliacao";
import { ProcessoAvaliativo } from "./processo-avaliativo";

export class ProcessoDisciplina {
    id: number;
    modeloDeAvaliacao: ModeloDeAvaliacao;
    // processoAvaliativo: ProcessoAvaliativo;
    disciplina: Disciplina;
}

import { ProcessoDiscente } from "./processo-discente";
import { ProcessoDisciplina } from "./processo-disciplina";


export class ProcessoAvaliativo {
    id: number;
    nome: string;
    descricao: string;
    processoDisciplina: Array<ProcessoDisciplina>;
    // processoDiscente: Array<ProcessoDiscente>;

}

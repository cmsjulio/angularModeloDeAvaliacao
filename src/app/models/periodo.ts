import { ModeloDeAvaliacao } from "./modelo-de-avaliacao";
import { TipoDeProva } from "./tipo-de-prova";

export class Periodo {
    id: number;
    nome: string;
    // modeloDeAvaliacao?: ModeloDeAvaliacao;
    tiposDeProvas?: Array<TipoDeProva>
}

import { ModeloDeAvaliacao } from "../ModeloDeAvaliacao/modelo-de-avaliacao";

export class Periodo {
    id!: number;
    nome!: string;
    modeloDeAvaliacao?: ModeloDeAvaliacao;
}

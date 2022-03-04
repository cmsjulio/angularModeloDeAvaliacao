import { Periodo } from "./periodo";
import { ProcessoDisciplina } from "./processo-disciplina";


export class ModeloDeAvaliacao {
    id: number;
    nome: string;
    sigla: string;
    descricao: string;
    periodos?: Array<Periodo>;
    // processodisciplina?: Array<ProcessoDisciplina>
}

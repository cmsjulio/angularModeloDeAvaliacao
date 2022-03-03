import { Periodo } from "../Periodo/periodo";

export class ModeloDeAvaliacao {
    id!: number;
    nome!: string;
    sigla!: string;
    descricao!: string;
    periodos?: Array<Periodo>;
}

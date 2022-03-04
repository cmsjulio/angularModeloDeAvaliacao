import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloDeAvaliacao } from '../../models/modelo-de-avaliacao';

@Component({
  selector: 'app-modelo-de-avaliacao',
  templateUrl: './modelo-de-avaliacao.component.html',
  styleUrls: ['./modelo-de-avaliacao.component.scss']
})
export class ModeloDeAvaliacaoComponent implements OnInit {

  modelos: ModeloDeAvaliacao[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.modelos = [{
        "id": 1,
        "nome": "Modelo Exatas 1",
        "descricao" : "Modelo para matérias de exatas.",
        "sigla": "MODEX1"
    },
    {
        "id": 2,
        "nome": "Modelo Linguagens 1",
        "descricao" : "Modelo para matérias de linguagens.",
        "sigla": "MODLN1"
    },
    {
        "id": 3,
        "nome": "Modelo Ciências Sociais 1",
        "descricao" : "Modelo para matérias de ciências sociais.",
        "sigla": "MODCS1"
    },
    {
        "id": 4,
        "nome": "Modelo Ciências Humanas",
        "descricao" : "Modelo para matérias de ciências humanas.",
        "sigla": "MODCH1",
        "periodos": [{"id":1, 
                      "nome": "Primeiro Semestre"}]}
      ];
  }


  listarPeriodos(id: number){
    this.router.navigate(['periodos-listar', id]);
  }  

  listarDiscentes(){
    this.router.navigate(['discente-listar']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDeAvaliacao } from 'src/app/models/modelo-de-avaliacao';

import { Periodo } from '../../models/periodo';

@Component({
  selector: 'app-listar-periodo-por-id-do-modelo',
  templateUrl: './listar-periodo-por-id-do-modelo.component.html',
  styleUrls: ['./listar-periodo-por-id-do-modelo.component.scss']
})
export class ListarPeriodoPorIdDoModeloComponent implements OnInit {
  id: number;
  periodos: Periodo[];
  modelos: ModeloDeAvaliacao[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.periodos = [{
      "id": 1,
      "nome": "Primeiro Semestre"
  }];
  }
}

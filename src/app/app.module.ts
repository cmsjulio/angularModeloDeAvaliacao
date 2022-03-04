import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeloDeAvaliacaoComponent } from './ModeloDeAvaliacao/modelo-de-avaliacao/modelo-de-avaliacao.component';
import { PeriodoComponent } from './Periodo/periodo/periodo.component';

import { ButtonModule } from 'primeng/button';
import { ModeloCriarComponent } from './ModeloDeAvaliacao/modelo-criar/modelo-criar.component';
import { TableModule } from 'primeng/table';
import { ModeloTreeTableComponent } from './ModeloDeAvaliacao/modelo-tree-table/modelo-tree-table.component';
import { ListarPeriodoPorIdDoModeloComponent } from './Periodo/listar-periodo-por-id-do-modelo/listar-periodo-por-id-do-modelo.component';


import { HttpClientModule } from '@angular/common/http';
import { ListarDisciplinasComponent } from './Disciplina/listar-disciplinas/listar-disciplinas.component';
import { ListarDiscentesComponent } from './Discente/listar-discentes/listar-discentes.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeloDeAvaliacaoComponent,
    PeriodoComponent,
    ModeloCriarComponent,
    ModeloTreeTableComponent,
    ListarPeriodoPorIdDoModeloComponent,
    ListarDisciplinasComponent,
    ListarDiscentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

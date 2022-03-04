import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDiscentesComponent } from './Discente/listar-discentes/listar-discentes.component';
import { ModeloCriarComponent } from './ModeloDeAvaliacao/modelo-criar/modelo-criar.component';
import { ModeloDeAvaliacaoComponent } from './ModeloDeAvaliacao/modelo-de-avaliacao/modelo-de-avaliacao.component';
import { ModeloTreeTableComponent } from './ModeloDeAvaliacao/modelo-tree-table/modelo-tree-table.component';
import { ListarPeriodoPorIdDoModeloComponent } from './Periodo/listar-periodo-por-id-do-modelo/listar-periodo-por-id-do-modelo.component';

const routes: Routes = [
  {path: 'modelo-criar', component: ModeloCriarComponent},
  {path: 'modelo-listar', component: ModeloDeAvaliacaoComponent},
  {path: 'modelo-arvore', component: ModeloTreeTableComponent},
  {path: 'discente-listar', component: ListarDiscentesComponent},
  {path: 'periodos-listar/:id', component: ListarPeriodoPorIdDoModeloComponent},
  {path: '', redirectTo: 'modelo-listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

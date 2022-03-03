import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloCriarComponent } from './ModeloDeAvaliacao/modelo-criar/modelo-criar.component';
import { ModeloDeAvaliacaoComponent } from './ModeloDeAvaliacao/modelo-de-avaliacao/modelo-de-avaliacao.component';

const routes: Routes = [
  {path: 'modelo-criar', component: ModeloCriarComponent},
  {path: 'modelo-listar', component: ModeloDeAvaliacaoComponent},
  {path: '', redirectTo: 'modelo-listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

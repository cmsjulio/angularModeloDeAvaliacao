import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeloDeAvaliacaoComponent } from './ModeloDeAvaliacao/modelo-de-avaliacao/modelo-de-avaliacao.component';
import { PeriodoComponent } from './Periodo/periodo/periodo.component';

import { ButtonModule } from 'primeng/button';
import { ModeloCriarComponent } from './ModeloDeAvaliacao/modelo-criar/modelo-criar.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ModeloDeAvaliacaoComponent,
    PeriodoComponent,
    ModeloCriarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

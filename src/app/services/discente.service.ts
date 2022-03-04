import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discente } from '../models/discente';

@Injectable({
  providedIn: 'root'
})
export class DiscenteService {

  // método para requisição GET via HTTP pro backend.
  private baseURL= "http://localhost:8888/base-api/discente";
  constructor(private httpClient: HttpClient) { }

  // para obter lista de discentes
  getDiscentesList(): Observable<Discente[]>{
    return this.httpClient.get<Discente[]>(`${this.baseURL}`);

  }

}

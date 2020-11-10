import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { senador, despesaSenador } from './interfaces';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private httpClient: HttpClient) { }

  retornaSenadores() {
    return this.httpClient.get<senador[]>(`${urlBase}/senadores`);
  }

  retornaDespesas(id: number) {
    return this.httpClient.get<despesaSenador>(`${urlBase}/despesasSenadores/${id}`);
  }
}

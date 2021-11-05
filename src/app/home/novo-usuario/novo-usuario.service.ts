import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
    return this.httpClient.post<NovoUsuario>(
      'http://localhost:3000/user/signup',
      novoUsuario
    );
  }

  verificaUsuarioExistente(nomeUsuario : string){
    return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}

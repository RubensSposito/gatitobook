import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais } from './animais';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient,private TokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.TokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access', token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers,
    });
  }

}

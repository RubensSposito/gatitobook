import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private UsuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private TokenService:TokenService) {
    if(this.TokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.TokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.UsuarioSubject.next(usuario)

  }

  retornaUsuario(){
    return this.UsuarioSubject.asObservable();
  }

  salvaToken(token: string){
    this.TokenService.salvarToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.TokenService.excluiToken();
    this.UsuarioSubject.next({});
  }

  estaLogado(){
    return this.TokenService.possuiToken();
  }

}

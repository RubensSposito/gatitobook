import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  user$ = this.UsuarioService.retornaUsuario();

  constructor(private UsuarioService: UsuarioService, private router: Router) { }
  ngOnInit(): void {

  }


  logout(){
    this.UsuarioService.logout();
    this.router.navigate(['']);
  }

}

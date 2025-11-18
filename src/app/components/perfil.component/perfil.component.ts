import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SeviceCubos } from '../../services/service.cubos';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit{
  public token!: string;
  public usuario!: Usuario;

  constructor(private _router: Router, private _service: SeviceCubos){

  }

  ngOnInit(): void {
    this.token = environment.token;

    if(this.token != ""){
      this._service.getPerfilUsuario(this.token).subscribe(response => {
        this.usuario = response;
      })
    }
  }

  llevarFormulario(): void {
    this._router.navigate(["/login"]);
  }

  cerrarSesion(): void {
    environment.token = "";
    this._router.navigate(["/login"]);
  }
}

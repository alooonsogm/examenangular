import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SeviceCubos } from '../../services/service.cubos';
import { Compra } from '../../models/compra';

@Component({
  selector: 'app-compra',
  standalone: false,
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css',
})
export class CompraComponent implements OnInit{
  public token!: string;
  public compras!: Array<Compra>;

  constructor(private _router: Router, private _service: SeviceCubos){

  }

  ngOnInit(): void {
    this.token = environment.token;

    if(this.token != ""){
      this._service.getComprasUsuario(this.token).subscribe(response => {
        this.compras = response;
      })
    }
  }

  llevarFormulario(): void {
    this._router.navigate(["/login"]);
  }
}

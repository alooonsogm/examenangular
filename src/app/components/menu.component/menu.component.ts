import { Component, OnInit } from '@angular/core';
import { SeviceCubos } from '../../services/service.cubos';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  public marcas!: Array<string>;
  public token!: string;

  constructor(private _service: SeviceCubos){

  }

  ngOnInit(): void {
    this.token = environment.token;
    this._service.getMarcas().subscribe(response => {
      console.log("Leyendo marcas");
      this.marcas = response;
    })
  }
}

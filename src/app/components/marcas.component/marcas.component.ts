import { Component, OnInit } from '@angular/core';
import { SeviceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marcas',
  standalone: false,
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css',
})
export class MarcasComponent implements OnInit{
  public cubos!: Array<Cubo>;
  public marca!: string;

  constructor(private _service: SeviceCubos, private _activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      this.marca = params["marca"];
        this._service.getCubosPorMarca(this.marca).subscribe(response => {
          this.cubos = response;
        })
    })
  }
}

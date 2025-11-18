import { Component, OnInit } from '@angular/core';
import { SeviceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  public cubos!: Array<Cubo>;

  constructor(private _service: SeviceCubos){

  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      console.log("Leyendo cubos");
      this.cubos = response;
    })
  }
}

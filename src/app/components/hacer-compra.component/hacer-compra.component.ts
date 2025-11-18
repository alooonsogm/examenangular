import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SeviceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-hacer-compra',
  standalone: false,
  templateUrl: './hacer-compra.component.html',
  styleUrl: './hacer-compra.component.css',
})
export class HacerCompraComponent implements OnInit{
  public token!: string;
  public cubos!: Array<Cubo>;
  @ViewChild("selectcubo") selectcubo!: ElementRef;

  constructor(private _router: Router, private _service: SeviceCubos){

  }

  ngOnInit(): void {
    this.token = environment.token;
    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    })
  }

  llevarFormulario(): void {
    this._router.navigate(["/login"]);
  }

  hacerElPedido(): void {
    var idCubo = this.selectcubo.nativeElement.value;
    if(this.token != ""){
      this._service.realizarCompra(this.token, idCubo).subscribe(response => {
        console.log("Compra realizada");
        this._router.navigate(["/compra"]);
      })
    }
  }
}

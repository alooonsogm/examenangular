import { Component, ViewChild, ElementRef } from '@angular/core';
import { SeviceCubos } from '../../services/service.cubos';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild("cajaEmail") cajaEmail!: ElementRef;
  @ViewChild("cajaPassword") cajaPassword!: ElementRef;

  constructor(private _service:SeviceCubos, private _router: Router){
    
  }

  loginEmpleados(): void {
    let email = this.cajaEmail.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    this._service.loginEmpleados(email, password).subscribe(response => {
      console.log(response.response);
      environment.token = response.response;
      this._router.navigate(["/perfil"]);
    })
  }
}

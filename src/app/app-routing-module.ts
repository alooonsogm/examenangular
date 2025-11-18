import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { MarcasComponent } from './components/marcas.component/marcas.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { CompraComponent } from './components/compra.component/compra.component';
import { HacerCompraComponent } from './components/hacer-compra.component/hacer-compra.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "marcas/:marca", component: MarcasComponent },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "compra", component: CompraComponent },
  { path: "hacercompra", component: HacerCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

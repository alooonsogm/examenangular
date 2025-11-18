import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SeviceCubos } from './services/service.cubos';
import { MarcasComponent } from './components/marcas.component/marcas.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { CompraComponent } from './components/compra.component/compra.component';
import { HacerCompraComponent } from './components/hacer-compra.component/hacer-compra.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    MarcasComponent,
    LoginComponent,
    PerfilComponent,
    CompraComponent,
    HacerCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    SeviceCubos
  ],
  bootstrap: [App]
})
export class AppModule { }

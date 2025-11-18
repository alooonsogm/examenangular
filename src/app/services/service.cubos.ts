import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Cubo } from "../models/cubo";
import { Usuario } from "../models/usuario";
import { Compra } from "../models/compra";

@Injectable()
export class SeviceCubos {
    constructor(private _http: HttpClient){

    }

    getCubos(): Observable<Array<Cubo>> {
        var urlCubos = environment.urlCubos;
        let request = "api/Cubos";

        return this._http.get<Array<Cubo>>(urlCubos + request);
    }

    getMarcas(): Observable<Array<string>> {
        var urlCubos = environment.urlCubos;
        let request = "api/Cubos/Marcas";

        return this._http.get<Array<string>>(urlCubos + request);
    }

    getCubosPorMarca(marca: string): Observable<Array<Cubo>> {
        let request = "api/Cubos/CubosMarca/" + marca;
        let urlCubos = environment.urlCubos;
        return this._http.get<Array<Cubo>>(urlCubos + request);
    }

    loginEmpleados(email: string, password: string): Observable<any> {
        let body = {
            email: email,
            password: password
        };

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");

        let urlLogin = environment.urlCubos;
        let request = "api/Manage/Login";

        return this._http.post(urlLogin + request, body, {headers: header});
    }

    getPerfilUsuario(token: string): Observable<Usuario> {
        let urlUsuario = environment.urlCubos;
        let request = "api/Manage/PerfilUsuario";

        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + token);

        return this._http.get<Usuario>(urlUsuario + request, {headers: header});
    }

    getComprasUsuario(token: string): Observable<Array<Compra>> {
        let urlUsuario = environment.urlCubos;
        let request = "api/Compra/ComprasUsuario";

        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + token);

        return this._http.get<Array<Compra>>(urlUsuario + request, {headers: header});
    }

    realizarCompra(token: string, idCubo: string): Observable<any> {
        let body = {
            idCubo: 0,
            idPedido: 0,
            idUsuario: 0,
            fechaPedido: ""
        };

        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + token);

        let urlUsuario = environment.urlCubos;
        let request = "api/Compra/InsertarPedido/" + idCubo;
        return this._http.post(urlUsuario + request, body, {headers: header});
    }
}
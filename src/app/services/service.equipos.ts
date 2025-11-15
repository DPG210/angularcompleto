import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipo } from "../models/Equipo";
import { Jugador } from "../models/Jugador";

@Injectable()
export class ServiceEquipos{
    constructor(private _http:HttpClient){}

    getEquipos():Observable<Array<Equipo>>{
        let request="api/equipos";
        let url= environment.urlApiApuestas+request;

        return this._http.get<Array<Equipo>>(url);
    }

    getEquipo(idequipo:number):Observable<Equipo>{
        let request="api/equipos/"+idequipo;
        let url= environment.urlApiApuestas+request;
        return this._http.get<Equipo>(url);
    }

    getJugadores(idequipo:number):Observable <Array<Jugador>>{
        let request="api/jugadores/jugadoresequipos/"+idequipo
        let url= environment.urlApiApuestas+request;

        return this._http.get<Array<Jugador>>(url);
    }
}
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "../models/Login";
import { Observable } from "rxjs";
import { Alumno } from "../models/Alumno";

@Injectable()
export  class ServiceAlumnos{
    public token:string;

    constructor(private _http:HttpClient){
        this.token="";
    }

    loginUser(user:Login):Observable<any>{
        let request="api/auth/login"
        let json=JSON.stringify(user);
        let url= environment.urlApiEjemplo+request;
        let header=new HttpHeaders().set("Content-type","application/json");

        return this._http.post(url,json,{headers:header});

    }

    getAlumnos():Observable<Array<Alumno>>{
        let request="api/alumnos/alumnostoken";
        let header= new HttpHeaders().set("Authorization", "bearer "+this.token);
        let url= environment.urlApiEjemplo+request;

        return this._http.get<Array<Alumno>>(url,{headers:header});
    }
}
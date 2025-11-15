import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "../models/Login";
import { Observable } from "rxjs";
import { Empleado } from "../models/Empleado";

@Injectable()
export  class ServiceEmpleados{
    public token2:string;

    constructor(private _http:HttpClient){
        this.token2="";
    }

    loginUser(user:Login):Observable<any>{
        let request="auth/login"
        let json=JSON.stringify(user);
        let url= environment.urlApiEmpleados+request;
        let header=new HttpHeaders().set("Content-type","application/json");

        return this._http.post(url,json,{headers:header});

    }

    getEmpleados():Observable<Array<Empleado>>{
        let request="api/empleados";
        let header= new HttpHeaders().set("Authorization", "bearer "+this.token2);
        let url= environment.urlApiEjemplo+request;

        return this._http.get<Array<Empleado>>(url,{headers:header});
    }
}
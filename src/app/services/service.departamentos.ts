import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/Departamento";
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable()
export class ServiceDepartamentos{
    constructor(private _http:HttpClient){}
    
    getDepartamentos():Observable<Array<Departamento>>{
        let request="api/departamentos";
        let url= environment.urlApiDepartamentos+request
        return this._http.get<Array<Departamento>>(url);
    }
    crearDepartamento(departamento:Departamento):Observable<any>{
        //IGUAL QUE EN REACT O JQUERY
        let request="api/departamentos";
        let url= environment.urlApiDepartamentos+request;
        let json=JSON.stringify(departamento)
        //CREAMOS LA CABECERA
        let header= new HttpHeaders();
        //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
        header=header.set("Content-type","application/json");
        return this._http.post(url,json,{headers:header});
    }
    getDepartamento(id:number):Observable<Departamento>{
        let request="api/departamentos/"+id;
        let url= environment.urlApiDepartamentos+request
        return this._http.get<Departamento>(url);
    }
    updateDepartamento(departamento:Departamento):Observable<any>{
        //IGUAL QUE EN REACT O JQUERY
        let request="api/departamentos";
        let url= environment.urlApiDepartamentos+request;
        let json=JSON.stringify(departamento)
        //CREAMOS LA CABECERA
        let header= new HttpHeaders().set("Content-type","application/json");
        //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
        return this._http.post(url,json,{headers:header});
    }
    deleteDepartamento(idDepartamento:number):Observable<any>{
        let request="api/departamentos/"+idDepartamento;
        let url= environment.urlApiDepartamentos+request;
        return this._http.delete(url);
    }
}
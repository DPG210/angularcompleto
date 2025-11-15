import { Injectable } from "@angular/core";
import { Fichero } from "../models/Fichero";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceFicheros{
    constructor(private _http:HttpClient){}

    subirFichero(fichero:Fichero):Observable<any>{
        let request="api/testingFiles"
        let url=environment.urlApiFicheros+request;
        let json=JSON.stringify(fichero);
        let header=new HttpHeaders().set("Content-type","application/json")
        return this._http.post(url,json,{headers:header});
    }
}
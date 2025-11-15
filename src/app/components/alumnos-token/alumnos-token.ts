import { Component, OnInit } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Alumno } from '../../models/Alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-token',
  imports: [],
  templateUrl: './alumnos-token.html',
  styleUrl: './alumnos-token.css',
})
export class AlumnosToken implements OnInit{
  public alumnos!:Array<Alumno>;

  constructor(private _service:ServiceAlumnos,
    private _router:Router
  ){}

  ngOnInit(): void {
    if(this._service.token==""){
      this._router.navigate(["login"]);
    }else{
      this._service.getAlumnos().subscribe(response=>{
      this.alumnos=response;
    })
    }
    
  }
}

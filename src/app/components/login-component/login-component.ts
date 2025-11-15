import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import {ServiceAlumnos} from "./../../services/service.alumnos"
import { Login } from '../../models/Login';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit{

  public mensaje!:string;

  @ViewChild("cajanom") cajaUsuario!:ElementRef;
  @ViewChild("cajapass") cajaPassword!:ElementRef;

  constructor(private _service:ServiceAlumnos,
    private _service2:ServiceEmpleados
  ){}

  ngOnInit(): void {
    
  }

  loginUsuarioA():void{
    let nombre=this.cajaUsuario.nativeElement.value;
    let password=this.cajaPassword.nativeElement.value;
    let usuario= new Login(nombre,password);
    

    this._service.loginUser(usuario).subscribe(response=>{
      this._service.token=response.response;
      this.mensaje="Usuario correcto"
    })
  }
  loginUsuarioE():void{
    let nombre=this.cajaUsuario.nativeElement.value;
    let password=this.cajaPassword.nativeElement.value;
    let usuario= new Login(nombre,password);
    

    this._service2.loginUser(usuario).subscribe(response=>{
      this._service.token=response.response;
      this.mensaje="Usuario correcto"
    })
  }
}

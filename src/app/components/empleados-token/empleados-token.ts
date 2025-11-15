import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-token',
  imports: [],
  templateUrl: './empleados-token.html',
  styleUrl: './empleados-token.css',
})
export class EmpleadosToken implements OnInit{
  public empleados!:Array<Empleado>;

  constructor(
    private _service:ServiceEmpleados,
    private _router: Router
  ){}

  ngOnInit(): void {
    if(this._service.token2==""){
      this._router.navigate(["login"]);
    }else{
      this._service.getEmpleados().subscribe(response=>{
        this.empleados=response;
      })
    }
  }
}

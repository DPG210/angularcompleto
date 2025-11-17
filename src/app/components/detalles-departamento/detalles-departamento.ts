import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-detalles-departamento',
  imports:[RouterModule],
  templateUrl: './detalles-departamento.html',
  styleUrl: './detalles-departamento.css',
})
export class DetallesDepartamento implements OnInit {
  public departamento!: Departamento;

  constructor(private _activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params:Params)=>{
      let id= parseInt(params["id"]);
      let nombre= params["nombre"];
      let localidad= params["localidad"];

      this.departamento= new Departamento(id,nombre,localidad);
    })
  }
}

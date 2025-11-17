import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-departamentos-home',
  imports:[RouterModule],
  templateUrl: './departamentos-home.html',
  styleUrl: './departamentos-home.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos!: Array<Departamento>;

  constructor (private _service: ServiceDepartamentos){}

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe(response=>{
      this.departamentos=response;
    })
  }

  ngOnInit(): void {
    this.loadDepartamentos();
  }
  
  deleteDepartamento(id:number):void{
    this._service.deleteDepartamento(id).subscribe(response=>{
      console.log("Delete");
      this.loadDepartamentos();
    })
  }
}

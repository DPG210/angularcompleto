import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Equipo } from '../../models/Equipo';
import { ServiceEquipos } from '../../services/service.equipos';


@Component({
  selector: 'app-menu-components',
  imports: [RouterModule],
  templateUrl: './menu-components.html',
  styleUrl: './menu-components.css',
})
export class MenuComponents implements OnInit{

  public equipos!:Array<Equipo>;

  constructor(
    private _service:ServiceEquipos
  ){
    this.equipos=[]
  }

  ngOnInit():void{
    this._service.getEquipos().subscribe(response=>{
      this.equipos=response
    })
  }
}

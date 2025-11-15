import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
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
  @ViewChild ("cajanombre") cajaNombre!:ElementRef;

  constructor(
    private _service:ServiceEquipos,
    private _router:Router
  ){
    this.equipos=[]
  }

  ngOnInit():void{
    this._service.getEquipos().subscribe(response=>{
      this.equipos=response
    })
  }

  buscarJugador():void{
    let nombre= this.cajaNombre.nativeElement.value
    this._router.navigate(['find',nombre]);
  }
}

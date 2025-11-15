import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceEquipos } from '../../services/service.equipos';
import { DatosEquipos } from '../../models/DatosEquipos';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-equipos-components',
  imports: [RouterModule],
  templateUrl: './equipos-components.html',
  styleUrl: './equipos-components.css',
})
export class EquiposComponents implements OnInit{
  public datosEquipo!:DatosEquipos;

  public cargando:boolean=true;

  constructor(
    private _service:ServiceEquipos,
    private _activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param:Params)=>{
      let id=parseInt(param['idequipo']);

      let equipo$= this._service.getEquipo(id);
      let jugadores$= this._service.getJugadores(id);

      this.cargando=true;

      forkJoin({
        equipo: equipo$,
        jugadores:jugadores$
      }).subscribe(response=>{
        const datos= new DatosEquipos();
        datos.equipo=response.equipo;
        datos.jugadores=response.jugadores

        this.datosEquipo=datos;

        this.cargando=false;
      })


      
    })
  }
  
}

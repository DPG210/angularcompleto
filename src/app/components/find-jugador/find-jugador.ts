import { Component, OnInit } from '@angular/core';
import { ServiceEquipos } from '../../services/service.equipos';
import { Jugador } from '../../models/Jugador';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-find-jugador',
  imports: [RouterModule],
  templateUrl: './find-jugador.html',
  styleUrl: './find-jugador.css',
})
export class FindJugador implements OnInit{
  public jugadores!:Array<Jugador>;

  constructor(private _service:ServiceEquipos,
    private _router:Router,
    private _activateRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((param:Params)=>{
      let nombre= param['nombre'];
      this._service.findJugadores(nombre).subscribe(response=>{
        this.jugadores=response;
      })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiceEquipos } from '../../services/service.equipos';
import { Jugador } from '../../models/Jugador';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-detalles-jugador',
  imports: [],
  templateUrl: './detalles-jugador.html',
  styleUrl: './detalles-jugador.css',
})
export class DetallesJugador implements OnInit{
  public jugador!:Jugador;

  constructor(private _service:ServiceEquipos,
    private _activateRoute:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((param:Params)=>{
      let id= parseInt(param['idjugador']);

      this._service.detallesJugador(id).subscribe(response=>{
        this.jugador=response;
      })
    })
  }

  volverHome():void{
    this._router.navigate(['']);
  }
  volverEquipo():void{
    this._router.navigate(['equipos', this.jugador.idEquipo])
  }
}

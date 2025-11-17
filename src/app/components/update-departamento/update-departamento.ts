import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/Departamento';
import { ActivatedRoute,Params,Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-departamento',
  imports:[FormsModule, RouterModule],
  templateUrl: './update-departamento.html',
  styleUrl: './update-departamento.css',
})
export class UpdateDepartamento implements OnInit{
  public departamento!: Departamento;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!:ElementRef;

  constructor(
    private _service:ServiceDepartamentos,
    private _activateRoute: ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params)=>{
      let id= parseInt(params["id"]);
      this._service.getDepartamento(id).subscribe(response=>{
        this.departamento=response;
      })
    })
  }
  
  updateDepartamento():void{
    let id= parseInt(this.cajaId.nativeElement.value);
    let nombre= this.cajaNombre.nativeElement.value;
    let localidad= this.cajaLocalidad.nativeElement.value;
    let departamento= new Departamento(id,nombre,localidad);

    this._service.updateDepartamento(departamento).subscribe(()=>{
      console.log("Actualizado")
      this._router.navigate(["/detalles",departamento.numero, departamento.nombre,departamento.localidad]);
    })
  }
}

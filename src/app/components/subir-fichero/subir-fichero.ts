import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServiceFicheros } from '../../services/service.ficheros';
import { Fichero } from '../../models/Fichero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subir-fichero',
  imports: [FormsModule],
  templateUrl: './subir-fichero.html',
  styleUrl: './subir-fichero.css',
})
export class SubirFichero implements OnInit{
  public fileContent:string;
  public urlFileUpload!:string

  @ViewChild("cajafile") cajaFile!:ElementRef;

  constructor(private _service:ServiceFicheros){
    this.fileContent=""
  }

  ngOnInit(): void {
    
  }

  subirFichero():void{
    let file= this.cajaFile.nativeElement.files[0];

    var ficheroNombre= file.name;
    console.log("Nombre: "+ficheroNombre);

    var reader= new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend=()=>{
      let dataUrl= reader.result as string;

      let base64= dataUrl.split(',')[1];

      this.fileContent= base64;

      let newFileModel= new Fichero(ficheroNombre,base64);

      this._service.subirFichero(newFileModel).subscribe(response=>{
        console.log(response);

        this.urlFileUpload=response.urlFile;
      })
    }
  }
}

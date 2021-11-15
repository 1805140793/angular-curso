import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
 
   @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  //para ocpuar el servicio primero debemos inicialirzarlo en el constructor
  constructor( private dbzService:DbzService){

  }

  agregar(){
    //validacion
    if(this.nuevo.nombre.trim().length==0){
      return;
    }
    
    //console.log(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo)
    
    this.dbzService.agregarPersonaje(this.nuevo);

    //para limpiar las cajas cuando ingrese un nuevo registro
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
 

}

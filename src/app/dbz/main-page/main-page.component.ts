import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  
  /*
  agregar(event: any){
    event.preventDeafault() //para evitar el refresco de la pagina
    console.log("HEYY...")
  }*/
 
  nuevo: Personaje={
    nombre:'Maestro Roshi',
    poder:700
  }
  /*
  get personajes():Personaje[]{
    return this.dbzService.personajes
  }
  
  agregarNuevoPersonaje(argumento:Personaje){
    //debugger;
    this.personajes.push(argumento)
  }
  */
  //inyeccion de dependencias(Servicios)
  constructor( private dbzService: DbzService ) { 
    
  }

}

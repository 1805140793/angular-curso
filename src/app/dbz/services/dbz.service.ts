import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{
    
    //una buena practica es poner en privado
    //para evitar el acceso
    private _personajes: Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:9500
        },
    ];
    
    get personajes(): Personaje[] {
        //separa cada uno de los elemntos y crea uno nuevo
        return [...this._personajes];
    }

    constructor(){
      //console.log('Servicio Inicializado')
    }

    agregarPersonaje( argumento: Personaje){
      //hacemos referencia a nuestra propiedad privada
      this._personajes.push(argumento)
    }
}
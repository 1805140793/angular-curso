import { Component } from '@angular/core';

//Decorador componente
@Component({
  selector: 'app-root', //nombre del componente (aparece en el INDEX)
  //el templateURL, permite especificar la direccion del archivo
  //el template, permite definir codigo html entre string '<spam>HOLA DE NUEVO</spam>'
  templateUrl: './app.component.html',   
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}

import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
        <h1>{{title}}</h1>

        <h3>La base es: <strong> {{base}} </strong></h3>


        <!--EVENTO CLICK
        Los eventos van entre parentesis
        <button (click)="acumular(+1)">+ 1</button>
        <span> {{numero}}</span>
        <button (click)="acumular(-1)">- 1</button>
        -->

        <button (click)="acumular(base)">{{base}}</button>
        <span> {{numero}}</span>
        <button (click)="acumular(-base)">{{base}}</button>
    `
})

//export puedo ocuparlo en otras clases
 export class ContadorComponent{
    title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  sumar(){
    //con el this, apunto a la propiedad de la clase
    this.numero+=1;
  }

  restar(){
    this.numero-=1;
  }

  acumular( valor: number ){
    this.numero += valor;
  }
}
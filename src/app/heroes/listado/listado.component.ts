import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[]=['Spiderman','Hulk','Ironman','Thor','AntMan']
  heroeBorrado:string=''
  constructor() { }

  //inicializar cosas
  //llamar a servicios
  ngOnInit(): void {
  }

  borrarHeroe(){
    console.log("borrando")
    //this.heroes.shift()    borra el primer elemento
    //const heroeBorrado = this.heroes.shift()
    //console.log(heroeBorrado)

    this.heroeBorrado = this.heroes.shift() ||''
  }

}

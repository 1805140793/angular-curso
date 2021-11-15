import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    //necesito exportar para ocuparlo en otro lado
    exports:[
        ContadorComponent
    ]

})

//con el export puedo colocar en el modulo principal
export class ContadorModule{

}
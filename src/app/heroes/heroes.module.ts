import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//en las declaraciones va que cosas contiene los
//componentes
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    //que cosas quiero que sea visible
    exports:[
        ListadoComponent
    ],

    //van solo modulos
    imports:[
        CommonModule
        //CommunModule contiene las directivas de ngf, nfor y demás
    ]
})

export class HeroesModule{

}
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([
         {   
                /* Esses ** nos redireciona para pagina de  Error */
          path: '**',component: NotFoundComponent
         }    
    ])
    ],
    exports:[
        NavBarComponent
    
    ]
})
export class CoreModule{}
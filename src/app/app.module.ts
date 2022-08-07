import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './couses/course.module';
import { CoreModule } from './core/core.module';

/* Todo os components deve ser declarado aqui */
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  /* Os modulos deve ser declarado aqui */
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    /* Aplicando uma rota de courses*/
    RouterModule.forRoot([
      {
        /*  Essa aqui é a rota que se estiver vazia vai nos redirecionarmos pagina de courses pelo localhost */
        path: ' ',
        redirectTo: 'courses',
        pathMatch: 'full',
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {} /* Aqui é o modulo RAIz */

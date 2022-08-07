import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/components/star/star.mocule';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CoursesListComponent } from './course.list.component';
import { AppPipeModule } from '../shared/pipes/app-pipe.module';

@NgModule({
  declarations: [
    CoursesListComponent,
     CourseInfoComponent
    ],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        /* Aqui para pegar a rota é preciso adicionar dois pontos(:) e depis o valor de pesquisa*/
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
      {
        /*  Essa aqui é a rota que vai nos redirecionarmospara a lista de cursos */
        path: 'courses',
        component: CoursesListComponent,
      },
    ]),
  ],
})
export class CourseModule {}

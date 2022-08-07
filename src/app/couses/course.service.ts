import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './couser.model';

/* Aplicando a Injeção de dependencia para o root */
@Injectable({
    providedIn: 'root'
})   
export class CourseService {
  
  private coursesUrl: string = 'http://localhost:3100/api/courses'; 
  
  
  constructor(private httpClient: HttpClient){}
/*  Metodo para pegar a lista de cursos via http*/
getAllCourses():Observable<Course[]>{
  return this.httpClient.get<Course[]>(this.coursesUrl);
}

/*  Metodo para pegar um curso por id de cursos via http*/
getCourseById(id: number):Observable<Course>{
  return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
}

/*  Metodo para salvar um curso por id via http*/
save(course: Course):Observable<Course>{
  if(course.id){
    return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`,course)
  }else{
    return this.httpClient.post<Course>(`${this.coursesUrl}`,course);
  }
}
/*  Metodo para deletar um curso por id via http*/
deleteById(id: number):Observable<any>{
  return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
}

}
var COURSES: Course[] = [
    {
        id: 1,
        imageUrl: '/assets/imgs/angular1.jpg',
        code: '1122',
        name: 'Angular Básico',
        price: 250.0,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 120,
        startData: '28/07/2022',
        endData: '12/09/2022',
        rating: 3.5,

      },
      {
        id: 2,
        imageUrl: '/assets/imgs/angular2.jpg',
        code: '2233',
        name: 'Angular Intermediário',
        price: 450.6,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 160,
        startData: '30/07/2022',
        endData: '20/09/2022',
        rating: 4.2,
      },
      {
        id: 3,
        imageUrl: '/assets/imgs/angular3.jpg',
        code: '3344',
        name: 'Angular Avançado',
        price: 330.7,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 250,
        startData: '01/10/2022',
        endData: '25/11/2022',
        rating: 4.8,
      },
      {
        id: 4,
        imageUrl: '/assets/imgs/java.jpg',
        code: '1100',
        name: 'Java Básico',
        price: 250.0,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 80,
        startData: '28/07/2022',
        endData: '12/09/2022',
        rating: 5,
      },
      {
        id: 5,
        imageUrl: '/assets/imgs/java2.jpg',
        code: '2211',
        name: 'Java Intermediário',
        price: 450.6,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 220,
        startData: '30/07/2022',
        endData: '20/09/2022',
        rating: 3.7,
      },
      {
        id: 6,
        imageUrl: '/assets/imgs/java3.jpeg',
        code: '3322',
        name: 'Java Avançado',
        price: 470.5,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 220,
        startData: '01/10/2022',
        endData: '25/11/2022',
        rating: 4.5,
      },

];

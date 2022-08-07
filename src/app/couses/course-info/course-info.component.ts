import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../couser.model';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  /* Aplicabndo a injeção de dependencia pelas variáveis (routeActive e courseInfo) */
  constructor(private routeActivate: ActivatedRoute, private courseService: CourseService) {}
  ngOnInit(): void {
    /* Pegar o caminho da rota atravez do parametro ID */
    this.courseService.getCourseById(
      + this.routeActivate.snapshot.paramMap.get('id')).subscribe({
        next: idCourse =>  this.course = idCourse,
        error: err => console.log("Error, The paramter ID ",err)
        
      });
  }
  save():void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log("saved sucess", course),
      error: err => console.log('Error ', err)
    });
  }
}

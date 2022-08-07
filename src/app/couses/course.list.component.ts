import { Component, OnInit } from '@angular/core';
import { Course } from './couser.model';
import { CourseService } from './course.service';

/* Esse @componte que vai dizer que essa classe a baixo é um component */
@Component({
  templateUrl: './course.list.component.html',
  styleUrls:['./course.style.css']
})
export class CoursesListComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  /* Aplivando a injeção de dependencia atravez do construtor  */
  constructor(private courseServices: CourseService) {}
  ngOnInit(): void {
    this.getAllCourses();
    
  }
  getAllCourses(): void {
   this.courseServices.getAllCourses().subscribe({
    next: courses => {
      this._courses = courses
      this.filteredCourses = this._courses;
    },
    error: err => console.log("Erro na chamada do http", err)
    })
  }
  deleteById( id: number): void{
     this.courseServices.deleteById(id).subscribe({
      next: () => {
        console.log('Delete sucess!');
        this.getAllCourses();
      },
      error: err => console.log('Error, was not deleted ',err)
     })
  }
  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }
  get filter() {
    return this._filterBy;
  }
}

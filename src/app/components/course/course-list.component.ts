import { Course } from './../../models/course.model';
import { CourseService } from './../../service/course.servive';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { validateBasis } from '@angular/flex-layout';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  public getCourses() : void {
    this.courseService.getCourses()

    .subscribe(
      (data:Course[]) => {
      this.courses = data;
    },
    (error : HttpErrorResponse) => {
        alert(error.message);
    });
  }

  ngOnInit(): void {
    this.getCourses();
    console.log(this.getCourses())
  }

}

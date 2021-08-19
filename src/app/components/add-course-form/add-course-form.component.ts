import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/service/course.servive';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {

  constructor(private courseService : CourseService) { }


  onAddCourse(addCourseForm:NgForm) {
   const course : Course = {
     c_name : addCourseForm.value.name,
     c_desp : addCourseForm.value.description,
     c_resource : addCourseForm.value.image,
     c_fees : parseInt(addCourseForm.value.fees)
   }
        this.courseService.addCourse(course);
  }

  ngOnInit(): void {
  }



}

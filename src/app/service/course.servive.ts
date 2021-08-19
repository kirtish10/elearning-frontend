import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";


@Injectable({
  providedIn:"root"
})
export class CourseService{


private baseurl = "http://localhost:8080/";
constructor(private http: HttpClient, private router: Router) {};


public getCourses() {

  console.log(this.http.get<any>(`${this.baseurl}/course/all`));
  return this.http.get<any>(`${this.baseurl}/course/all`)
  .pipe()
  ;
}


public addCourse(course:Course) : Observable<Course> {
  console.log(course)
   this.http.post<any>(`${this.baseurl}/course/add`,course).subscribe(s => {
    console.log(s);
  })
  return this.http.post<any>(`${this.baseurl}/course/add`,course);
}


}

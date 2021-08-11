import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


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


}

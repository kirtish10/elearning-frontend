import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../models/user.model";


@Injectable({
  providedIn:"root"
})

export class UserService{


public isLoggedIn: boolean = false

private baseurl = "http://localhost:8080";
constructor(private http: HttpClient, private router: Router) {};

public addUser(user:User) : Observable<User> {
  console.log(user)
   this.http.post<any>(`${this.baseurl}/user/add`,user)
   .subscribe(s =>
    {
    console.log(s);
    this.isLoggedIn = true;
  })

  return this.http.post<any>(`${this.baseurl}/user/add`,user);

}



public saveAuthData(token: String) {
  localStorage.setItem("token", token.toString());
}


public LogOut() {
  localStorage.removeItem("token");
  this.router.navigate(["login"]);
  this.isLoggedIn = false;

}


public loginWithEmail(data:{email:String,password:String}) : Observable<User> {
  console.log(data)
   this.http.post<any>(`${this.baseurl}/user/login`,data).subscribe(s => {
    console.log(s);
  })
  return this.http.post<any>(`${this.baseurl}/user/login`,data);

}

public getallFeedback() : Observable<any> {

   this.http.get<any>(`${this.baseurl}/feedback/all`).subscribe(s => {
    console.log(s);
  })
  return this.http.get<any>(`${this.baseurl}/feedback/all`);

}



}

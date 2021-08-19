import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }



  login(form:NgForm) {
   const reqBody = {
      email : form.value.email,
      password : form.value.password
    }
    console.log(reqBody)

    this.userService.loginWithEmail(reqBody)
    .pipe(
      catchError((err) => {
        alert(err.error.message)
        console.log(err)
        return throwError(err)
      })
    )
    .subscribe(
      data => {
        alert("Hi " + data.name + ", click ok to continue");
        if(data)
        {
          this.userService.saveAuthData(data.email)
          this.userService.isLoggedIn = true;
          console.log(this.userService.isLoggedIn)
        }
        this.router.navigate(["/allcourses"])

      }

    )
  }






  ngOnInit(): void {
  }

}

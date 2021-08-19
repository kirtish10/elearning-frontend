import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  Roles: any = ['Admin', 'User'];


   today:Date = new Date();


  constructor(private userService : UserService) { }

  onRegisterEmployee(registerForm : NgForm) : void {


    const user: User = {
      id: null,
      name : registerForm.value.name,
      email: registerForm.value.email,
      password:registerForm.value.password,
      phone_no: parseInt(registerForm.value.number),
      address:registerForm.value.address,
      upload_photo:registerForm.value.photo,
      reg_date: this.today.getDate() +"-" + this.today.getMonth() + "-" + this.today.getFullYear(),


    }

    this.registerUser(user);

    console.log(user);
  }


  registerUser(user:User) {
      this.userService.addUser(user);
  }


  ngOnInit(): void {




  }

}

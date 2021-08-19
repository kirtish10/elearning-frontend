import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private userService:UserService ) {}

  public feedback: Feedback[] = [];

  ngOnInit(): void {

    this.userService.getallFeedback().subscribe(
      data => {
        this.feedback = data;
        console.log(data)
      }
    )

  }



}

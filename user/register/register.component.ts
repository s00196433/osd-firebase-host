import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/user.service';


import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, Observable, ReplaySubject, throwError } from 'rxjs';
import { User } from 'src/app/model/user';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userForm : FormGroup= new FormGroup({});
  //userForm?: FormGroup;
  message: String = "";


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    this.userService.createUser(this.userForm?.value)
      .subscribe({
        next: user => {
          console.log(JSON.stringify(user) + ' has been added');
          this.message = "new user has been added";
        },
        error: (err) => this.message = err
      });
  }

  dismissAlert() {
    this.message = "";
  }



}



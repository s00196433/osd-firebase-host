import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { User } from 'src/app/model/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

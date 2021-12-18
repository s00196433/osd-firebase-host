import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { User } from './model/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectAngular';

  user?: User | null;

  constructor (private userService: UserService, private router: Router) {
    this.userService.user.subscribe( user => this.user = user)
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}

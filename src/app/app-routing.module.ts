import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from '../../user/users/users.component';
import { LoginComponent } from '../../user/login/login.component';
import { RegisterComponent } from '../../user/register/register.component';
import {AuthGuard} from '../app/core/auth.guard'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies',component:  MovieListComponent},
  {path: 'users', component: UsersComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

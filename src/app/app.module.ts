import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import {AppComponent} from './app.component';

import { MovieRowComponent } from './movie/movie-row/movie-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieFormComponent } from './movie/movie-form/movie-form.component';
import { LoginComponent } from '../../user/login/login.component';
import { RegisterComponent } from '../../user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from '../../user/users/users.component';

//---------------------------------------------------------------------------





//----------------------------------------------------------------------
import { ErrorInterceptor } from './helper/errorinterceptor';
import { JwtInterceptor } from './helper/jwtinterceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptorService } from './helper/jwtinterceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    MovieRowComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

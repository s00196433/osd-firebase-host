import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MovieRowComponent } from './movie2/movie-row/movie-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie2/movie-details/movie-details.component';
import { MovieListComponent } from './movie2/movie-list/movie-list.component';
import { MovieFormComponent } from './movie2/movie-form/movie-form.component';



@NgModule({
  declarations: [
    AppComponent,
  
    MovieRowComponent,
    SampleFormComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

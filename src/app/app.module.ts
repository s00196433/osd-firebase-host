import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

import { MovieRowComponent } from './movie2/movie-row/movie-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie2/movie-details/movie-details.component';
import { MovieListComponent } from './movie2/movie-list/movie-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieRowComponent,
    SampleFormComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

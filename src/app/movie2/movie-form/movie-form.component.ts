import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  
  @Input() movie?: Movie;
  @Output() movieFormClose = new EventEmitter<Movie>();
  message: string = "";
  //movieForm? : FormGroup  ;
   movieForm : FormGroup= new FormGroup({});
  

  constructor() { }

  ngOnInit(): void {

    this.movieForm = new FormGroup({
      title: new FormControl(this.movie?.title, [Validators.required, Validators.minLength(3)]),
      year: new FormControl(this.movie?.year, [Validators.required, Validators.max(2024)]),
      runtime: new FormControl(this.movie?.runtime, [Validators.required, Validators.min(1)])
    })
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.movieForm?.value);
    this.movieFormClose.emit(this.movieForm?.value)
  }

  get title() {
    return this.movieForm?.get('title');
  }
  get year() {
    return this.movieForm?.get('year');
  }

  get runtime() {
    return this.movieForm?.get('runtime');
  }


  closeForm() {
    this.movieFormClose.emit(undefined)

  }



}

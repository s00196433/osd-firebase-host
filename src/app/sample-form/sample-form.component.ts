import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

ngOnInit(): void {
  }

  onSubmit(){
    console.log('forms submitted with ' + this.movieForm.value)
  } 

  movieForm : FormGroup = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    year: new FormControl ('', [Validators.required])
  })

  get title() {
    return this.movieForm.get('title');
  }
  get year() {
    return this.movieForm.get('year');
  } 


}

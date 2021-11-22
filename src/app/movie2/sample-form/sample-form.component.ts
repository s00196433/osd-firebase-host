import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() { }

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

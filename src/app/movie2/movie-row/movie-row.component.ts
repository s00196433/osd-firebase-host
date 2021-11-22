import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {


  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
}
}

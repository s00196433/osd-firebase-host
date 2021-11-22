import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  movieList: Movie[] = [];
  message: String = ''

 
  ngOnInit(): void {
      this.movieService.getMovies().subscribe({
      next: (value: Movie[]) => this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (message) => this.message =message
    })

  }
}

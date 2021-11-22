import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {Movie} from '../../model/movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  message: string = "";

  currentMovie! : Movie;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {


    this.movieService.getMovies().subscribe({
      next: (value: Movie[] )=> this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (movie: Movie): void {
    this.currentMovie = movie;
  }

} 


import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {Movie} from '../../model/movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList!: Movie[];
  message!: string;

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

 /* movieList: Movie[] = [];
  message: string = "";

  currentMovie! : Movie;
  showMovieForm: boolean = false;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {


    this.movieService.getMovies().subscribe({
      next: (value: Movie[] )=> this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (mess) => this.message = mess
    })
  }


  openAddMovie(): void {
    this.currentMovie != undefined;
    this.showMovieForm = true;
  }


  clicked (movie: Movie): void {
    this.currentMovie = movie;
  }

  movieFormClose(movie?: Movie): void {
    this.showMovieForm = false;
    console.table(movie);
    if (movie == null) {
      this.message = "form closed without saving";
      this.currentMovie != undefined
    }
    else if (this.currentMovie == null) {
      this.addNewMovie(movie);
    }
  }
    addNewMovie(newMovie: Movie): void {
      console.log('adding new movie ' + JSON.stringify(newMovie));
      this.movieService.addMovie({ ...newMovie })
        .subscribe({
          next: movie => {
            console.log(JSON.stringify(movie) + ' has been added');
            this.message = "new movie has been added";
          },
          error: (err) => this.message = err
        });
  
      // so the updated list appears
  
      this.movieService.getMovies().subscribe({
        next: (value: Movie[]) => this.movieList = value,
        complete: () => console.log('movie service finished'),
        error: (mess) => this.message = mess
      })
    } */
  

}

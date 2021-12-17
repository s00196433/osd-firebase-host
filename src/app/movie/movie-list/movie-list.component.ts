import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import {Movie} from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {



  movieList: Movie[] = [];
  message: string = "";
  showMovieForm: boolean = false;

  currentMovie?: Movie = undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe({
      next: (value: Movie[]) => this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(movie: Movie): void {
    this.currentMovie = movie;
    console.table(this.currentMovie)
  }

  isSelected(movie: Movie): boolean {
    if (!movie || !this.currentMovie) {
      return false;
    }
    else {

      return movie._id === this.currentMovie._id;
    }
  }

  openAddMovie(): void {
    this.currentMovie = undefined;
    this.showMovieForm = true;
  }

  openEditMovie(): void {
    this.showMovieForm = true;
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
  }

  updateMovie(id: string, movie: Movie): void {
    console.log('updating ' + JSON.stringify(movie));
    this.movieService.updateMovie(id, movie)
      .subscribe({
        next: movie => {
          console.log(JSON.stringify(movie) + ' has been updated');
          this.message = " movie has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.movieService.getMovies().subscribe({
      next: (value: Movie[]) => this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (mess) => this.message = mess
    })
  }

  /* either the form has closed without saving or new movie details have been
  entered or a movie has been updated */

  movieFormClose(movie?: Movie): void {
    this.showMovieForm = false;
    console.table(movie);
    if (movie == null) {
      this.message = "form closed without saving";
      this.currentMovie = undefined
    }
    else if (this.currentMovie == null) {
      this.addNewMovie(movie);
    }
    else {
      this.updateMovie(this.currentMovie._id, movie)
    }
  }

// note: Bad UX there is no check that the user wants to delete the movie and hasn't just 
// hit the button by mistake

  deleteMovie() {
    console.log('deleting a movie');
    if (this.currentMovie) {
      this.movieService.deleteMovie(this.currentMovie._id)
        .subscribe({
          next: movie => {
            console.log(JSON.stringify(movie) + ' has been added');
            this.message = "movie has been deleted";
          },
          error: (err) => this.message = err
        });
    }



    // so the updated list appears

    this.movieService.getMovies().subscribe({
      next: (value: Movie[]) => this.movieList = value,
      complete: () => console.log('movie service finished'),
      error: (mess) => this.message = mess
    })

  }

  dismissAlert() {
    this.message = "";
  }


}
  


  

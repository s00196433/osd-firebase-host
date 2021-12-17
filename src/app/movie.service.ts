import { Injectable } from '@angular/core';
import { Movie } from '../app/model/movie'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private dataUri = 'http://localhost:3000/movies'

  /*constructor(private http: HttpClient) { }



  getMovies(): Observable<Movie[]> {

    console.log("get movies called" );


    return this.http.get<Movie[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

            // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
 */
  constructor(private http: HttpClient) { }
	

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.dataUri, movie)
      .pipe(
        catchError(this.handleError)
      )
  }


  updateMovie(id: string, movie: Movie): Observable<Movie> {
    console.log('subscribing to update' + id);
    let movieURI: string = this.dataUri + '/' + id;
    return this.http.put<Movie>(movieURI, movie)
      .pipe(
        catchError(this.handleError)
      )
  }


  getMovies(): Observable<Movie[]> {


    console.log("get movies called");


    return this.http.get<Movie[]>(`${this.dataUri}`)
      .pipe(
        catchError(this.handleError)
      )
  }




/** DELETE: delete the movie from the server */
deleteMovie(id: string): Observable<unknown> {
  const url = `${this.dataUri}/${id}`; // DELETE 
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
}

/* cat deleteMovie(id: string){
  this.http.delete(this.dataUri +'/'+ id)
  .subscribe(() => {
    console.log('Deleted!');
  });
} */



  //taken from: https://angular.io/guide/http


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.




      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);






      // question over how much information you want to give to the end-user
      // it depends on who will be using the system
      // this information would not be returned in a public interface but might in an intranet.


      if (error.status == 412) {
        return throwError('412 Error' + JSON.stringify(error.error))
      }


    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  
  
  
}

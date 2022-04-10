import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders}from '@angular/common/http';
import {Book} from "./book";
import { Observable,throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { registerLocaleData } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  //apiURL='https://us-central1-bookshelf-zc-7c69c.cloudfunctions.net'

  apiURLfunction='https://us-central1-my-osd-project.cloudfunctions.net'
  

  constructor(private http:HttpClient) { }

  httpOptions = 
  {
    Headers : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  getBooks():Observable<Book>
  {
    return this.http.get<Book>(this.apiURLfunction + '/getBooks')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    }
  
  handleError(error: { error: { message: string; }; status: any; message: any; }){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent)
    {
          errorMessage = error.error.message;
    }
    else
    {
      errorMessage =  `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
      
    }

    addBook(title:string , author:string): Observable<Book>
    {
      return this.http.post<Book>(this.apiURLfunction + '/addBook?title=' + title + '&author=' + author,null)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    delBook(id:string): Observable<Book>
    {
      return this.http.delete<Book>(this.apiURLfunction + '/deleteBook?id='+id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  }
  


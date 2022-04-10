import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { FirebaseApiService } from './firebase-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 /* title = 'hello';
  description = 'hello agin';

  itemValue ="";
items?: Observable<any[]>;


constructor(public db:AngularFireDatabase)
{
  this.items = db.list('items').valueChanges();
}



  ngOnInit(): void {
  } */

  MyBooks: any = [];
  titleValue="";
  authorValue="";

  constructor(public firebaseApiService:FirebaseApiService)
  {

  }

  ngOnInit() {
      this.loadBooks();
  }

  loadBooks() {
    return this.firebaseApiService.getBooks().subscribe((data:{}) => {
      this.MyBooks = data;
    })
  }

  addBook() {
    return this.firebaseApiService.addBook(this.titleValue,this.authorValue).subscribe((data: {}) =>
    {
      this.MyBooks =data;
      this.titleValue = '';
      this.authorValue=';'

    })
  }

  deleteBook(id:string)
  {
    return this.firebaseApiService.delBook(id).subscribe((data: {}) =>
    {this.MyBooks = data;
    })
  }


  
}

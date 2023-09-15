import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../Entity/Book";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent {

  books: Book[] | undefined;

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(value => { this.books = value})
  }

  // ngOnInit(){
  //   this.bookService.getBooks().subscribe(value => { this.books = value})
  // }
}

import { Injectable } from '@angular/core';
import {Book} from "../Entity/Book";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartBooks = new BehaviorSubject<Book[]>([]);
  private currentBook: Book[] | undefined;

  addToCard(book: Book){
    this.cartBooks.value.push(book);
  }

  getCartBooks(){
    this.cartBooks.subscribe(value => {
      this.currentBook = value;})
      this.cartBooks.next(this.currentBook!!)
    return this.cartBooks;
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../Entity/Book";
import {Location} from "@angular/common";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.bookService.getBook(name)
      .subscribe(book => this.book = book);
  }

  addToCard() {
    this.cartService.addToCard(this.book!!);
  }

  goBack(): void {
    this.location.back();
  }
}

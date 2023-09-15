import { Component } from '@angular/core';
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-store-header',
  templateUrl: './book-store-header.component.html',
  styleUrls: ['./book-store-header.component.css']
})
export class BookStoreHeaderComponent {
  constructor(private service: BookService) {
  }

  fillSearch(such: any){
    this.service.some(such.target.value)
  }
}

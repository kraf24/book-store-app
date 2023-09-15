import {Component, Input} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Book} from "../Entity/Book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input()
  book: Book | undefined;

  constructor(private service: CartService, private router: Router) {
  }

  redirectToDetails() {
    console.log(this.book?.id);
    this.router.navigate([`detail/${this.book?.name}`]);
  }
}

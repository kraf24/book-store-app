import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Book} from "../Entity/Book";

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit{

  cartBooks: Book[] | undefined;

  ngOnInit(){
    this.fetchCartBooks()
  }

  private fetchCartBooks() {
    this.service.getCartBooks().subscribe(value => {this.cartBooks = value})
  }

  constructor(private service: CartService) {}

  countTotal() {
    return  this.cartBooks?.reduce((sum, book) => sum + book.price, 0).toFixed(2)
  }

  redirectToRickRoll() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }

  noBooksInCart = () => {
   return this.cartBooks?.length === 0
  }


}

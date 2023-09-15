import {Injectable} from '@angular/core';
import {map} from "rxjs";
import {Book} from "../Entity/Book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  private search: string = ""

  some(search: string) {
    this.search = search
  }

  getBooks() {
    return this.http.get<BookDTO[]>("/api/books").pipe(map(this.convertBooks))
  }

  getBook(name: string) {
    return this.http.get<BookDTO>(`/api/book?name=${name}`).pipe(map(this.convertBook))
  }

  private convertBook(value: BookDTO) {
    return new Book(value.uuid, value.name, value.price);
  }

  private convertBooks(bookDTO: BookDTO[]) {
    return bookDTO.map(bookDto => {
      return new Book(bookDto.uuid, bookDto!!.name, bookDto!!.price)
    })
  }

}

export interface BookDTO {
  uuid: string,
  name: string,
  price: number
}

// function mockBooks() {
//   return [new Book("Hobbit", 99.98),
//     new Book("lord of the rings", 10.23),
//     new Book("Marsianer", 999.99),
//     new Book("TBI or CTE: What the Hell is Wrong with Me? (English Edition)", 0.00),
//     new Book("berliner luft", 5.40),
//     new Book("Hanover luft", 2.40)];
//
// }


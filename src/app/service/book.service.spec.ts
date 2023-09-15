import { TestBed } from '@angular/core/testing';

import {BookDTO, BookService} from './book.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Book} from "../Entity/Book";

describe('BookStoreHeaderService', () => {
  let service: BookService;
  let controller: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);
    controller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('connects to endpoint', () => {
    let booksDTO: Array<BookDTO> = [{uuid: "1234", name: "someName", price: 10}]
    let book: Array<Book> = [new Book("1234", "someName", 10)]

    service.getBooks().subscribe(value => {
      expect(value).toEqual(book)
    })

    controller.expectOne("/api/books").flush(booksDTO)
  });

  it("gets on book", () => {
    let booksDTO: BookDTO = {uuid: "1234", name: "someName", price: 10}
    let book: Book = new Book("1234", "someName", 10)

    service.getBook("someName").subscribe(value => {
      expect(value).toEqual(book)
    })

    controller.expectOne(`/api/book?name=someName`).flush(booksDTO)
  });

});

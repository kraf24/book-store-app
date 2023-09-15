package com.example.backend.model

import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository

@Repository
class BooksRepository {

  lateinit var books: MutableList<Book>

  fun all(): List<Book> {
    return books
  }

  fun getById(id: String): Book {
    return books.find { book -> book.name  == id }!!
  }

  fun saveBook(book: Book){
    books.add(book)
  }

}

@Component
class BookInitialisation(private val booksRepository: BooksRepository) : ApplicationRunner {
  override fun run(args: ApplicationArguments?) {
    booksRepository.books = bookList
  }
}

val bookList = mutableListOf<Book>(
  Book(
    "8ea5a6a0-cf10-4563-91b9-5767d6155f62",
    "Hobbit",
    99.98
  ),
  Book(
    "19e8e578-06aa-4e09-ad1d-f2bcf4e6a350",
    "Lord of the rings",
    10.23
  ),
  Book(
    "22d5c873-95ba-4201-8622-194512525247",
    "Marsianer",
    999.99
  ),
  Book(
    "432bb733-5a83-4e2a-9cd8-0d5eacaa0b5d",
    "What the Hell is Wrong with Me? (English Edition)",
    0
  ),
  Book(
    "b1c6d3af-97fd-43f9-bb7a-aa1f5bd3ecd6",
    "Berliner luft",
    5.4
  ),
  Book(
    "4a07f5c3-8250-4e5c-9bec-4b5d52db0dc3",
    "Hannover luft",
    2.4
  )
)

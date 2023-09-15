package com.example.backend.model

import org.springframework.stereotype.Component

@Component
class CartRepository(private val booksRepository: BooksRepository) {
  private var books: MutableList<Book> = mutableListOf()

  fun add(bookName: String){
    booksRepository.books.find { it.name == bookName }?.let { books.add(it) }
  }

  fun findById(uuid: String): Book? {
    return books.find { it.uuid == uuid }
  }

  fun getAll(): List<Book> {
    return books
  }

  fun clear(){

  }
}

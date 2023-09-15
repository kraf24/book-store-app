package com.example.backend.api

import com.example.backend.model.Book
import com.example.backend.model.BooksRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class BookController(private val booksRepository: BooksRepository) {

  @GetMapping("/api/books")
  fun getBooks(): ResponseEntity<List<Book>>{
    return  ResponseEntity(booksRepository.all(), HttpStatus.OK)
  }

  @GetMapping("/api/book")
  fun getBook(@RequestParam name: String): ResponseEntity<Book> {
    return ResponseEntity(booksRepository.getById(name), HttpStatus.OK)
  }
}

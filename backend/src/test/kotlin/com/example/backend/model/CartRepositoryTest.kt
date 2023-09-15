package com.example.backend.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CartRepositoryTest{

  @Autowired
  lateinit var booksRepository: BooksRepository

  @Autowired
  lateinit var cartRepository: CartRepository

  @BeforeEach
  fun setUp(){
    cartRepository.clear()
  }

  @Test
  fun `adds books to a cart`() {
    val newBook = Book(name = "Underdog", price = 10)
    val anotherBook = Book(name = "Overpass", price = 14.99)
    booksRepository.saveBook(newBook)
    booksRepository.saveBook(anotherBook)

    cartRepository.add("Underdog")
    cartRepository.add("Overpass")

    assertEquals(cartRepository.getAll().size, 2)
    assertEquals(cartRepository.findById(newBook.uuid)?.name, "Underdog")
  }
}

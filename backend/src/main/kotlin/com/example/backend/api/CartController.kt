package com.example.backend.api

import com.example.backend.model.CartRepository
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class CartController(private val cartRepository: CartRepository) {

  @PostMapping("/api/cart/add")
  fun addBook(@RequestParam name: String){
    cartRepository.add(name)
  }
}

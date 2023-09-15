package com.example.backend.model

import java.util.UUID


data class Book(val uuid: String = generateUUid(), val name: String, val price: Number)

private fun generateUUid() = UUID.randomUUID().toString()

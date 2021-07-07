package com.hackathon.bookswap.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hackathon.bookswap.model.Books;

public interface BooksRepository extends MongoRepository<Books, String> {

}

package com.hackathon.bookswap.service;

import java.util.List;

import com.hackathon.bookswap.model.Books;

public interface BooksService {
	
	public void addBooks(Books books);
	
	public Books getBooks(String username);

	public List<Books> getNearbyBooks(String username);

}

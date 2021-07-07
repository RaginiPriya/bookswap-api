package com.hackathon.bookswap.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.bookswap.model.ApiResponse;
import com.hackathon.bookswap.model.Books;
import com.hackathon.bookswap.security.CurrentUser;
import com.hackathon.bookswap.security.UserPrincipal;
import com.hackathon.bookswap.service.BooksService;

@RestController
@RequestMapping("/api/books")
public class BooksRestResource {
	
	@Autowired
	BooksService booksService;
	
	@PostMapping
    public ResponseEntity<?> addBooks(@Valid @RequestBody Books books) {

		booksService.addBooks(books);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, "Book added successfully"));
    }
	
	@GetMapping
    public Books getBooks(@CurrentUser UserPrincipal currentUser) {
        return booksService.getBooks(currentUser.getUsername());
    }
	
	@GetMapping("/user/{username}")
    public Books getBooksOfUser(@PathVariable String username) {
        return booksService.getBooks(username);
    }
	
	@GetMapping("/nearby")
    public List<Books> getNearbyBooks(@CurrentUser UserPrincipal currentUser) {
        return booksService.getNearbyBooks(currentUser.getUsername());
    }

}

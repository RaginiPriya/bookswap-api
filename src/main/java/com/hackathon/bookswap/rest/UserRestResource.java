package com.hackathon.bookswap.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.bookswap.model.Address;
import com.hackathon.bookswap.model.ApiResponse;
import com.hackathon.bookswap.model.UserSummary;
import com.hackathon.bookswap.security.CurrentUser;
import com.hackathon.bookswap.security.UserPrincipal;
import com.hackathon.bookswap.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserRestResource {
	
	@Autowired 
	private UserService userService;
	
	@GetMapping("/me")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getUsername(), currentUser.getName(), currentUser.getEmail());
        return userSummary;
    }
	
	@PostMapping("/address")
    public ResponseEntity<?> addAddress(@Valid @RequestBody Address address) {		
		userService.addAddress(address);
		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, "Address added successfully"));
    }
	
	@GetMapping("/address")
    public Address getAddress(@CurrentUser UserPrincipal currentUser) {
        return userService.getAddress(currentUser.getUsername());
    }

}

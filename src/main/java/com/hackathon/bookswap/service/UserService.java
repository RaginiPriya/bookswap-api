package com.hackathon.bookswap.service;

import org.springframework.stereotype.Service;

import com.hackathon.bookswap.model.Address;

public interface UserService {
	
	public void addAddress(Address adress);
	
	public Address getAddress(String username);

}

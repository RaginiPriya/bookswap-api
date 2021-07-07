package com.hackathon.bookswap.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hackathon.bookswap.model.Address;

public interface AddressRepository extends MongoRepository<Address, String> {
	
	

}

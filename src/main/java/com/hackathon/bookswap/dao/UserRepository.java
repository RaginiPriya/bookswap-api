package com.hackathon.bookswap.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hackathon.bookswap.model.User;

public interface UserRepository extends MongoRepository<User, String> {

	Optional<User> findByUsernameOrEmail(String username, String email);

	Optional<User> findById(String id);

	User save(User user);

	boolean existsByUsername(String username);

	boolean existsByEmail(String email);
	
	

}

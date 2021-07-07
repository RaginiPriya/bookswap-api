package com.hackathon.bookswap.model;

import org.springframework.data.annotation.Id;

public class User {
	
	@Id
	private String id;
	
//	private String name;
	
	private String email;
	
	private String password;
	
	private String username;

	public User(String username, String email, String password) {
//        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}

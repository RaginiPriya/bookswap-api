package com.hackathon.bookswap.model;

public class UserSummary {
	
	private String name;
	
	private String username;
	
	private String email;

	public UserSummary(String username, String name, String email) {
		this.username = username;
		this.name = name;
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

}

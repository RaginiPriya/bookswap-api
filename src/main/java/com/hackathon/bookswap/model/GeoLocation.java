package com.hackathon.bookswap.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class GeoLocation {
	
	@Id
	private String username;
	
	private String latitude;
	
	private String longitude;
	
	@Transient
	private double distance;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}
	
	
	
	

}

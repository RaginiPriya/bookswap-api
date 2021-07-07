package com.hackathon.bookswap.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.bookswap.dao.BooksRepository;
import com.hackathon.bookswap.dao.GeoLocationRepository;
import com.hackathon.bookswap.model.Books;
import com.hackathon.bookswap.model.GeoLocation;
import com.hackathon.bookswap.service.BooksService;
import com.hackathon.bookswap.util.DistanceUtil;

@Service
public class BooksServiceImpl implements BooksService {
	
	@Autowired
	BooksRepository booksRepository;
	
	@Autowired
	GeoLocationRepository geoLocationRepository;

	@Override
	public void addBooks(Books books) {
		booksRepository.save(books);
		
	}

	@Override
	public Books getBooks(String username) {
		Optional<Books> books = booksRepository.findById(username);
		if(books.isPresent()) {
			return books.get();
		}
		return null;
	}

	@Override
	public List<Books> getNearbyBooks(String username) {
		
		List<String> usernamesNearby = new ArrayList<>();
		List<Books> booksList = new ArrayList<>();
		
		List<GeoLocation> geoLocations = geoLocationRepository.findAll();
		Optional<GeoLocation> currentGeoLocation = geoLocationRepository.findById(username);
		
		if(!currentGeoLocation.isPresent()) {
			return null;
		}
		
		GeoLocation location = currentGeoLocation.get();
		for(GeoLocation geoLocation : geoLocations) {
			Double distance = DistanceUtil.distance(geoLocation.getLatitude(), location.getLatitude(), geoLocation.getLongitude(), location.getLongitude());
			geoLocation.setDistance(distance);
		}
		
		List<GeoLocation> sortedGeoLocations = geoLocations.stream().sorted((geoLocation1,geoLocation2) -> {
			return Double.compare(geoLocation1.getDistance(), geoLocation2.getDistance());
		}).collect(Collectors.toList());
		
		for(GeoLocation geoLocation : sortedGeoLocations) {
			usernamesNearby.add(geoLocation.getUsername());
		}
		
		for(String other : usernamesNearby) {
			Optional<Books> booksOptional = booksRepository.findById(other);
			if(booksOptional.isPresent()) {
				Books books = booksOptional.get();
				booksList.add(books);
			}
		}
		
		return booksList;
	}

}

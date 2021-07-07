package com.hackathon.bookswap.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hackathon.bookswap.model.GeoLocation;

public interface GeoLocationRepository extends MongoRepository<GeoLocation, String> {

}

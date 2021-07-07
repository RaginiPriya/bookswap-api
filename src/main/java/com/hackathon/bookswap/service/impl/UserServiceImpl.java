package com.hackathon.bookswap.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.bookswap.dao.AddressRepository;
import com.hackathon.bookswap.dao.GeoLocationRepository;
import com.hackathon.bookswap.model.Address;
import com.hackathon.bookswap.model.GeoLocation;
import com.hackathon.bookswap.service.UserService;
import com.hackathon.bookswap.util.DistanceUtil;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	GeoLocationRepository geoLocationRepository;

	@Override
	public void addAddress(Address address) {
		//get points for address
		//save in geolocation
		GeoLocation geoLocation = DistanceUtil.getCoordinates(address);
		geoLocation.setUsername(address.getUsername());
		geoLocationRepository.save(geoLocation);
		addressRepository.save(address);		
	}

	@Override
	public Address getAddress(String username) {
		Optional<Address> address = addressRepository.findById(username);
		if(address.isPresent()) {
			return address.get();
		}
		return null;
	}

}

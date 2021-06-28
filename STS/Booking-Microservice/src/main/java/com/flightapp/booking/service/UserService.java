package com.flightapp.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.flightapp.booking.model.DAOUser;
import com.flightapp.booking.repository.UserRepository;

import flightapp.exceptions.BookingException;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	public DAOUser getUserDetails(String userName) throws BookingException {
		DAOUser user = userRepo.findByUsername(userName);
		if (user != null) {
			user.setPassword(null);
			return user;
		}
		throw new BookingException(501, "User not found with username-" + userName);
	}

}
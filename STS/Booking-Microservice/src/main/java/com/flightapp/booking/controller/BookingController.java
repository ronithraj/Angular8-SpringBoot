package com.flightapp.booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flightapp.booking.model.DAOUser;
import com.flightapp.booking.model.Ticket;
import com.flightapp.booking.service.BookingService;
import com.flightapp.booking.service.UserService;

import flightapp.exceptions.BookingException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

	@Autowired
	BookingService bookingService;

	@Autowired
	UserService userService;

	@PostMapping(value = "booking", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Ticket> createTicket(@Validated @RequestBody Ticket ticket) throws BookingException {
		return new ResponseEntity<>(bookingService.createNewTicket(ticket), HttpStatus.OK);
	}

	@GetMapping(value = "booking/history/{emailId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<List<Ticket>> getTickets(@PathVariable("emailId") String emailId) throws BookingException {
		return new ResponseEntity<>(bookingService.getAllTickets(emailId), HttpStatus.OK);
	}

	@Cacheable(value = "user")
	@GetMapping(value = "getUserDetails/{username}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public DAOUser getUserDetailsByUserName(@PathVariable("username") String userName) throws BookingException {
		return userService.getUserDetails(userName);
	}

	@DeleteMapping(value = "booking/cancel/{pnr}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public Long cancelTicket(@PathVariable("pnr") String pnrNumber) {
		return bookingService.cancelBookedTicket(pnrNumber);
	}

}

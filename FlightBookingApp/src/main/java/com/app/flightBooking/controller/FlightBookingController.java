package com.app.flightBooking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.flightBooking.models.Flight;
import com.app.flightBooking.models.Ticket;
import com.app.flightBooking.service.FlightBookingService;
import com.app.flightBooking.service.TicketService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class FlightBookingController {

	@Autowired
	FlightBookingService flightService;
	
	@Autowired
	TicketService ticketService;

	@PostMapping("create-airline")
	public Flight createAirline(@Validated @RequestBody Flight flight) {
		return flightService.createNewAirline(flight);
	}
	
	@PostMapping("create-ticket")
	public Ticket createTicket(@Validated @RequestBody Ticket ticket) {
		return ticketService.createNewTicket(ticket);
	}
	
	@GetMapping("get-all-flights")
	public List<Flight> getAirlines(){
		return flightService.getAllAirlines();
	}
	
	@GetMapping("get-all-tickets")
	public List<Ticket> getTickets(){
		return ticketService.getAllTickets();
	}
	
	@GetMapping("get/{id}")
	public Optional<Flight> getAirlineById(@PathVariable(value="id") Long flightId){
		return flightService.getAirlineById(flightId);
	}
	
	@PutMapping("schedule/{id}")
	public Flight scheduleAirline(@PathVariable(value="id") Long flightId,
			@Validated @RequestBody Flight flightDetails){
		return flightService.scheduleAirline(flightId,flightDetails);
	}
		
	@PutMapping("blockOrUnblockFlight/{id}")
	public Flight blockUnblockFlight(@PathVariable(value="id") Long flightId,
			@Validated @RequestBody Flight flight) {
		return flightService.blockOrUnblockAirline(flightId,flight);
	}
	
	@PostMapping("get-one-way-flights")
	public List<Flight> getOneWayFlights(@RequestBody Flight flight){
		return flightService.getOneWayFlightDetails(flight);
	}
}


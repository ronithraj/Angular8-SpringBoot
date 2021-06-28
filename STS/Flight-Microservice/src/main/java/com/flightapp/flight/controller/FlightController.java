package com.flightapp.flight.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flightapp.flight.exceptions.FlightException;
import com.flightapp.flight.model.Flight;
import com.flightapp.flight.service.FlightService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FlightController {

	@Autowired
	FlightService flightService;

	@PostMapping(value = "airline/inventory/add", produces = { MediaType.APPLICATION_JSON_VALUE })
	public Flight createAirline(@Validated @RequestBody Flight flight) throws FlightException {
		return flightService.createNewAirline(flight);
	}

//	@Cacheable(value = "flights")
	@GetMapping(value = "get-all-flights", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<List<Flight>> getAirlines() throws FlightException {
		return new ResponseEntity<>(flightService.getAllAirlines(), HttpStatus.OK);
	}

	@Cacheable(key = "#p0", value = "flight")
	@GetMapping(value = "get/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Optional<Flight>> getAirlineById(@PathVariable(value = "id") Long flightId)
			throws FlightException {
		return new ResponseEntity<>(flightService.getAirlineById(flightId), HttpStatus.OK);
	}

//	@CachePut(key = "#p0", value = "scheduledFlight")
	@PutMapping(value = "schedule/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Flight> scheduleAirline(@PathVariable(value = "id") Long flightId,
			@Validated @RequestBody Flight flightDetails) throws FlightException {
		return new ResponseEntity<>(flightService.scheduleAirline(flightId, flightDetails), HttpStatus.OK);

	}

//	@CachePut(key = "#id", value = "managedFlight")
	@PutMapping(value = "blockOrUnblockFlight/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Flight> blockUnblockFlight(@PathVariable(value = "id") Long flightId,
			@Validated @RequestBody Flight flight) throws FlightException {
		return new ResponseEntity<>(flightService.blockOrUnblockAirline(flightId, flight), HttpStatus.OK);
	}

	@PostMapping(value = "search", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<List<Flight>> getOneWayFlights(@RequestBody Flight flight) throws FlightException {
		return new ResponseEntity<>(flightService.getOneWayFlightDetails(flight), HttpStatus.OK);
	}

}

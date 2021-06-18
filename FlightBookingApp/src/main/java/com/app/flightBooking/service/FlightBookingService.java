package com.app.flightBooking.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.flightBooking.models.Flight;
import com.app.flightBooking.models.Ticket;
import com.app.flightBooking.repository.FlightBookingRepository;

@Service
public class FlightBookingService {

	@Autowired
	private FlightBookingRepository flightrepo;

	public Flight createNewAirline(Flight newFlight) {
		return flightrepo.save(newFlight);
	}
	
	public List<Flight> getAllAirlines() {
		return flightrepo.findAll();
	}

	public Optional<Flight> getAirlineById(Long flightId) {
		return flightrepo.findById(flightId);
	}

	@Transactional
	public Flight scheduleAirline(Long flightId, Flight flightDetails) {

		Flight scheduleFlight = flightrepo.findById(flightId)
				.orElseThrow(() -> new Error("Airline with mentioned flightId-" + flightId + "is not found."));

		scheduleFlight.setId(flightDetails.getId());
		scheduleFlight.setCityFrom(flightDetails.getCityFrom());
		scheduleFlight.setCityTo(flightDetails.getCityTo());
		scheduleFlight.setContactNum(flightDetails.getContactNum());
		scheduleFlight.setFlightNumber(flightDetails.getFlightNumber());
		scheduleFlight.setAirLineName(flightDetails.getAirLineName());
		scheduleFlight.setEndTime(flightDetails.getEndTime());
		scheduleFlight.setStartTime(flightDetails.getStartTime());
		scheduleFlight.setBusinessSeats(flightDetails.getBusinessSeats());
		scheduleFlight.setNonBusinessSeats(flightDetails.getNonBusinessSeats());
		scheduleFlight.setRowSeats(flightDetails.getRowSeats());
		scheduleFlight.setTicketCost(flightDetails.getTicketCost());
		scheduleFlight.setTravelHours(flightDetails.getTravelHours());
		final Flight scheduledFlight = flightrepo.save(scheduleFlight);
		return scheduledFlight;

	}
	
	public Flight blockOrUnblockAirline(Long flightId, Flight flight) {
		Flight scheduleFlight = flightrepo.findById(flightId)
				.orElseThrow(() -> new Error("Airline with mentioned flightId-" + flightId + "is not found."));
		
		scheduleFlight.setIsAvailable(flight.getIsAvailable());
		final Flight scheduledFlight = flightrepo.save(scheduleFlight);
		return scheduledFlight;
	}


	public List<Flight> getOneWayFlightDetails(Flight flight) {
		flight.setEndTime("00:00");
		List<Flight> allFlights = flightrepo.findAll();
		List<Flight> filteredFlights = allFlights.stream()
				.filter(cf -> cf.getCityFrom().equalsIgnoreCase(flight.getCityFrom()))
				.filter(ct -> ct.getCityTo().equalsIgnoreCase(flight.getCityTo()))
				.filter(stm -> (Integer.parseInt(stm.getStartTime().split(":")[0]) <= Integer
						.parseInt(flight.getStartTime().split(":")[0])))
				.filter(etm -> (Integer.parseInt(etm.getEndTime().split(":")[0]) >= Integer
						.parseInt(flight.getEndTime().split(":")[0])))
				.collect(Collectors.toList());
		return filteredFlights;
	}

	

}

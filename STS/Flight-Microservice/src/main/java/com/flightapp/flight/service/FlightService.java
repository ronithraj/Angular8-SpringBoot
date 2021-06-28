package com.flightapp.flight.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flightapp.flight.exceptions.FlightException;
import com.flightapp.flight.model.Flight;
import com.flightapp.flight.repository.FlightRepository;

@Service
public class FlightService {
	@Autowired
	private FlightRepository flightRepo;

	public Flight createNewAirline(Flight newFlight) throws FlightException {
		try {
			return flightRepo.save(newFlight);
		} catch (Exception e) {
			throw new FlightException(500, "Cannot create a new airline.");
		}
	}

	public List<Flight> getAllAirlines() throws FlightException {
		try {
			return flightRepo.findAll();
		} catch (Exception e) {
			throw new FlightException(500, "Cannot get all new airline.");
		}
	}

	public Optional<Flight> getAirlineById(Long flightId) throws FlightException {
		try {
			return flightRepo.findById(flightId);
		} catch (Exception e) {
			throw new FlightException(500, "Cannot get an airline by Id.");
		}
	}

	@Transactional
	public Flight scheduleAirline(Long flightId, Flight flightDetails) throws FlightException {
		try {
			Flight scheduleFlight = flightRepo.findById(flightId)
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
			final Flight scheduledFlight = flightRepo.save(scheduleFlight);
			return scheduledFlight;
		} catch (Exception e) {
			throw new FlightException(500, "Cannot schedule an airline.");
		}

	}

	public Flight blockOrUnblockAirline(Long flightId, Flight flight) throws FlightException {
		try {
		Flight scheduleFlight = flightRepo.findById(flightId)
				.orElseThrow(() -> new Error("Airline with mentioned flightId-" + flightId + "is not found."));

		scheduleFlight.setIsAvailable(flight.getIsAvailable());
		final Flight scheduledFlight = flightRepo.save(scheduleFlight);
		return scheduledFlight;
		}
		catch(Exception e) {
			throw new FlightException(500,"Cannot block/unblock an airline.");
		}
	}

	public List<Flight> getOneWayFlightDetails(Flight flight) throws FlightException {
		try {
		flight.setEndTime("00:00");
		List<Flight> allFlights = flightRepo.findAll();
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
	catch(Exception e) {
		throw new FlightException(500,"Failed to search airlines.");
	}
}
}
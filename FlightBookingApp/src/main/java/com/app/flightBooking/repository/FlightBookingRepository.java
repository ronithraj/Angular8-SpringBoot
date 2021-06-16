package com.app.flightBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.flightBooking.models.Flight;

@Repository
public interface FlightBookingRepository extends JpaRepository<Flight, Long> {
}

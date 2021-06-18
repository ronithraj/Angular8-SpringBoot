package com.app.flightBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.flightBooking.models.Flight;

@Repository
public interface FlightBookingRepository extends JpaRepository<Flight, Long> {
	
//	@Query(value="SELECT * FROM Flight WHERE city_from=:cityFrom AND city_to=:cityTo AND :startTime BETWEEN start_time and end_time")
//	Flight getOneWayFlights(@Param("cityFrom") String cityFrom,@Param("cityTo") String cityTo,@Param("startTime") String );
}

package com.flightapp.booking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flightapp.booking.model.Ticket;

@Repository
public interface BookingRepository extends JpaRepository<Ticket, Long> {

	List<Ticket> findByUserId(Long uid);

	Long deleteByPnrNumber(String pnrNumber);

}

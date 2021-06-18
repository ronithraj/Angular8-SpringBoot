package com.app.flightBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.flightBooking.models.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

}

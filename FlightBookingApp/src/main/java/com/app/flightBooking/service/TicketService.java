package com.app.flightBooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.flightBooking.models.Flight;
import com.app.flightBooking.models.Ticket;
import com.app.flightBooking.repository.TicketRepository;


@Service
public class TicketService {
	
	@Autowired
	private TicketRepository ticketrepo;

	public Ticket createNewTicket(Ticket ticket) {
		return ticketrepo.save(ticket);
	}

	public List<Ticket> getAllTickets() {
		return ticketrepo.findAll();
	}
}

package com.flightapp.booking.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.flightapp.booking.model.DAOUser;
import com.flightapp.booking.model.Ticket;
import com.flightapp.booking.repository.BookingRepository;
import com.flightapp.booking.repository.UserRepository;

import flightapp.exceptions.BookingException;

@Service
@Transactional
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private UserRepository userRepo;

	private static final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	public Ticket createNewTicket(Ticket ticket) throws BookingException {
		try {
			ticket.setPnrNumber(randomAlphaNumeric(10));
			return bookingRepository.save(ticket);
		} catch (Exception e) {
			throw new BookingException(500, "Failed to create a ticket.");
		}
	}

	public List<Ticket> getAllTickets(String emailId) throws BookingException {
		try {
			Long uid = getUserDetails(emailId);
			return bookingRepository.findByUserId(uid);
		} catch (Exception e) {
			throw new BookingException(500, "Failed to get all tickets.");
		}
	}

	private Long getUserDetails(String emailId) {
		DAOUser user = userRepo.findByEmailId(emailId);
		return user.getId();
	}

	public String randomAlphaNumeric(int count) {
		StringBuilder builder = new StringBuilder();
		while (count-- != 0) {
			int character = (int) (Math.random() * ALPHA_NUMERIC_STRING.length());
			builder.append(ALPHA_NUMERIC_STRING.charAt(character));
		}
		System.out.println(builder.toString());
		return builder.toString();
	}

	public Long cancelBookedTicket(String pnrNumber) {
		return bookingRepository.deleteByPnrNumber(pnrNumber);
	}

}

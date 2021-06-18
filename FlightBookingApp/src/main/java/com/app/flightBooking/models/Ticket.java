package com.app.flightBooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tickets_table")
@JsonIgnoreProperties
public class Ticket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(name = "air_line_name", nullable = false)
	private String airLineName;

	@Column(name = "flight_number", nullable = false)
	private String flightNumber;

	@Column(name = "price", nullable = false)
	private String price;

	@Column(name = "seat_count", nullable = false)
	private int seatCount;

	@Column(name = "city_from", nullable = false)
	private String fromCity;

	@Column(name = "city_to", nullable = false)
	private String toCity;
	
	@Column(name="dept_date", nullable = false)
	private String ticketDate;
		
	public String getTicketDate() {
		return ticketDate;
	}

	public void setTicketDate(String ticketDate) {
		this.ticketDate = ticketDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAirLineName() {
		return airLineName;
	}

	public void setAirLineName(String airLineName) {
		this.airLineName = airLineName;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public int getSeatCount() {
		return seatCount;
	}

	public void setSeatCount(int seatCount) {
		this.seatCount = seatCount;
	}

	public String getFrom() {
		return fromCity;
	}

	public void setFrom(String fromCity) {
		this.fromCity = fromCity;
	}

	public String getTo() {
		return toCity;
	}

	public void setTo(String toCity) {
		this.toCity = toCity;
	}

	public String getFromCity() {
		return fromCity;
	}

	public void setFromCity(String fromCity) {
		this.fromCity = fromCity;
	}

	public String getToCity() {
		return toCity;
	}

	public void setToCity(String toCity) {
		this.toCity = toCity;
	}

}

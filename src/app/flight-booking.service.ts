import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {

  private baseUrl = 'http://localhost:8090/flight-booking-application/api/';


  constructor(private http: HttpClient) { }

  createFlight(addFlight: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}create-airline`, addFlight);
  }

  createTicket(addTicket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}create-ticket`, addTicket);
  }

  getFlights(): Observable<any> {
    return this.http.get(`${this.baseUrl}get-all-flights`);
  }

  getAllTickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}get-all-tickets`);
  }

  getFlightById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get/${id}`);
  }

  updateSchedule(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}schedule/${id}`, value);
  }

  blockOrUnblockFlight(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}blockOrUnblockFlight/${id}`, value);
  }

  getOneWayFlight(flightValue: any): Observable<any> {
    return this.http.post(`${this.baseUrl}get-one-way-flights`, flightValue);
  }
}

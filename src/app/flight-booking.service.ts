import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {

  private flightBaseUrl = 'http://192.168.29.23:8180/';

  private bookingBaseUrl = 'http://192.168.29.23:8090/';

  private registerUrl = 'http://192.168.29.23:8370/';


  constructor(private http: HttpClient) { }

  createFlight(addFlight: Object): Observable<Object> {
    return this.http.post(`${this.flightBaseUrl}airline/inventory/add`, addFlight);
  }

  createTicket(addTicket: Object): Observable<Object> {
    return this.http.post(`${this.bookingBaseUrl}booking`, addTicket);
  }

  getFlights(): Observable<any> {
    return this.http.get(`${this.flightBaseUrl}get-all-flights`);
  }

  getAllTickets(): Observable<any> {
    return this.http.get(`${this.bookingBaseUrl}get-all-tickets`);
  }

  getFlightById(id: number): Observable<any> {
    return this.http.get(`${this.flightBaseUrl}get/${id}`);
  }

  updateSchedule(id: number, value: any): Observable<any> {
    return this.http.put(`${this.flightBaseUrl}schedule/${id}`, value);
  }

  blockOrUnblockFlight(id: number, value: any): Observable<any> {
    return this.http.put(`${this.flightBaseUrl}blockOrUnblockFlight/${id}`, value);
  }

  getOneWayFlight(flightValue: any): Observable<any> {
    return this.http.post(`${this.flightBaseUrl}search`, flightValue);
  }

  registerUser(newUser: Object): Observable<Object> {
    return this.http.post(`${this.registerUrl}register`, newUser);
  }

  getUserDetailsByUserName(userName: string): Observable<Object> {
    return this.http.get(`${this.bookingBaseUrl}getUserDetails/${userName}`);
  }

  getAllTicketsFromEmail(emailId: string): Observable<any> {
    return this.http.get(`${this.bookingBaseUrl}booking/history/${emailId}`);
  }

  cancelTicket(pnr: string): Observable<any> {
    return this.http.delete(`${this.bookingBaseUrl}booking/cancel/${pnr}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBookingService } from '@app/flight-booking.service';
import { Ticket } from '@app/_models/ticket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  availableTickets: Observable<Ticket[]>;
  constructor(private router: Router,
    private flightBookingService: FlightBookingService) { }

  ngOnInit() {
    this.availableTickets = this.flightBookingService.getAllTickets();
  }

}

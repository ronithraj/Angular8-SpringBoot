import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBookingService } from '@app/flight-booking.service';
import { Ticket } from '@app/_models/ticket';
import { Observable } from 'rxjs';
import { ModalService } from '@app/_modal';
import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  availableTickets: Observable<Ticket[]>;
  bodyText: string;
  ticketDetails: Ticket;
  loggedInUser: User;
  userId: any;

  constructor(private router: Router,
    private flightBookingService: FlightBookingService,
    private modalService: ModalService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loggedInUser = this.authenticationService.currentUserValue;
    this.flightBookingService.getUserDetailsByUserName(this.loggedInUser.userName)
      .subscribe(user => {
        this.userId = user;
        this.availableTickets = this.flightBookingService.getAllTicketsFromEmail(this.userId.emailId);
      },
        error => {
          console.log(error);
        });

    // this.currentuser = this.authenticationService.currentUserValue;

    this.bodyText = 'This text can be updated in modal 1';
    this.ticketDetails = new Ticket();
  }
  onDetails(id: number) {
    console.log(id);
  }

  openModal(id: string, details: Ticket) {
    this.ticketDetails = details;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

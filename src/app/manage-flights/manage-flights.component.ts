import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBookingService } from '@app/flight-booking.service';
import { Ticket } from '@app/_models/ticket';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.scss']
})
export class ManageFlightsComponent implements OnInit {

  availableTickets: Observable<Ticket[]>;
  loggedInUser: User;
  userId: any;
  message: string;
  isCancelSuccess: boolean;
  popoverTitle: string = "Confirmation-Popup";
  popoverMessage: string = "Are you sure you want to cancel?"
  constructor(private router: Router,
    private flightBookingService: FlightBookingService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.availableTickets = this.flightBookingService.getAllTickets();
    this.loggedInUser = this.authenticationService.currentUserValue;
    this.flightBookingService.getUserDetailsByUserName(this.loggedInUser.userName)
      .subscribe(user => {
        this.userId = user;
        this.availableTickets = this.flightBookingService.getAllTicketsFromEmail(this.userId.emailId);
      },
        error => {
          console.log(error);
        });
  }
  onCancelClick(pnr: string) {
    this.flightBookingService.cancelTicket(pnr)
      .subscribe(deletedTicket => {
        this.message = "Canceled the ticket successfully!";
        this.isCancelSuccess = true;
        this.availableTickets = this.flightBookingService.getAllTicketsFromEmail(this.userId.emailId);
      },
        error => {
          console.log(error);
        });
  }

}

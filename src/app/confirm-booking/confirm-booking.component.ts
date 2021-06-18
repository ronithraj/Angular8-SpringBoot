import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight } from '@app/_models/flight';
import { Ticket } from '@app/_models/ticket';
import { FlightBookingService } from '@app/flight-booking.service';
import { Observable } from 'rxjs';
import { SharedService } from '@app/_services/SharedService';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.less'],
  providers: [FlightBookingService]
})
export class ConfirmBookingComponent implements OnInit {
  oneWayId: number;
  twoWayId: number;
  departureDate: string;
  returnDate: string;
  seatCountOne: number;
  seatCountTwo: number;
  ticketDateOne: string;
  ticketDateTwo: string;
  availbleFlights: Observable<Flight[]>;
  flightOne: Flight;
  flightTwo: Flight;
  ticketOne: Ticket = new Ticket();
  ticketTwo: Ticket = new Ticket();
  isSuccessTicketOne: boolean = false;
  message: string;
  isSuccessTicketTwo: boolean = false;
  showTwoWay: boolean = false;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router, private activeRoute: ActivatedRoute,
    private sharedService: SharedService) { }

  ngOnInit() {

    this.flightOne = new Flight();
    this.flightTwo = new Flight();
    this.oneWayId = this.sharedService.id1;
    this.twoWayId = this.sharedService.id2;
    this.departureDate = this.sharedService.departureDate;
    this.returnDate = this.sharedService.returnDate;

    this.flightBookingService.getFlightById(this.oneWayId)
      .subscribe(data => {
        this.flightOne = data;
      },
        error => {
          console.log(error);
        });
    if (this.twoWayId !== 0) {
      this.showTwoWay = true;
      this.flightBookingService.getFlightById(this.twoWayId)
        .subscribe(data => {
          this.flightTwo = data;
        },
          error => {
            console.log(error);
          });
    } else {
      this.showTwoWay = false;
    }
    console.log(this.twoWayId, this.showTwoWay);
  }
  onCheckOut() {
    this.flightToTicketAssignment();
  }
  flightToTicketAssignment() {

    this.ticketOne.airLineName = this.flightOne.airLineName;
    this.ticketOne.flightNumber = this.flightOne.flightNumber;
    this.ticketOne.fromCity = this.flightOne.cityFrom;
    this.ticketOne.toCity = this.flightOne.cityTo;
    this.ticketOne.price = this.flightOne.ticketCost;
    this.ticketOne.seatCount = this.seatCountOne;
    this.ticketOne.ticketDate = this.departureDate;
    this.flightBookingService.createTicket(this.ticketOne).subscribe(data => {
      console.log(data);
      this.isSuccessTicketOne = true;
      this.message = "One way ticket";
    },
      error => {
        console.log(error);
      });
    if (this.twoWayId == 0) { } else {
      this.ticketTwo.airLineName = this.flightTwo.airLineName;
      this.ticketTwo.flightNumber = this.flightTwo.flightNumber;
      this.ticketTwo.fromCity = this.flightTwo.cityFrom;
      this.ticketTwo.toCity = this.flightTwo.cityTo;
      this.ticketTwo.price = this.flightTwo.ticketCost;
      this.ticketTwo.seatCount = this.seatCountTwo;
      this.ticketTwo.ticketDate = this.returnDate;
      this.flightBookingService.createTicket(this.ticketTwo).subscribe(data => {
        console.log(data);
        this.isSuccessTicketTwo = true;
        this.message = "Two way ticket";
      },
        error => {
          console.log(error);
        });
    }
  }
}

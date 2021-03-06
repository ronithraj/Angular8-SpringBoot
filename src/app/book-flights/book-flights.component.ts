import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBookingService } from '@app/flight-booking.service';
import { Flight } from '@app/_models/flight';
import { Observable } from 'rxjs';
import { SharedService } from '@app/_services/SharedService';
import { AuthenticationService } from '../_services/authentication.service'
import { User } from '../_models/user';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.scss']
})
export class BookFlightsComponent implements OnInit {

  cities: any;
  oneWayflights: Observable<Flight[]>;
  twoWayflights: Observable<Flight[]>;
  flightOne: Flight = new Flight();
  flightTwo: Flight = new Flight();
  tripType: any = 0;
  isoneWay: boolean = false;
  roundWay: boolean = false;
  departureDate: string;
  returnDate: string;
  showConfirm: boolean = false;
  listIds: any;
  twoSelect: any;
  oneSelect: any;
  currentUser: User;
  // public personalForm: FormGroup;
  public today;

  constructor(private router: Router,
    private flightBookingService: FlightBookingService,
    private sharedService: SharedService,
    private authenticationService: AuthenticationService) {
    const currentDate: Date = new Date();
    let dd: any = currentDate.getDate();
    let mm: any = currentDate.getMonth() + 1;
    let yyyy: any = currentDate.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {
    this.cities = ["Hyderabad", "Chennai", "Delhi", "Bengaluru", "Kolkata", "Cochin", "Ahmedabad"];
    this.currentUser = this.authenticationService.currentUserValue;
  }


  onSearchFlights() {
    this.flightTwo.cityFrom = this.flightOne.cityTo;
    this.flightTwo.cityTo = this.flightOne.cityFrom;
    this.showConfirm = true;
    if (this.tripType === 1) {
      this.isoneWay = true;
      this.flightBookingService.getOneWayFlight(this.flightTwo)
        .subscribe(data => {
          this.twoWayflights = data;
          this.roundWay = true;
          console.log('two', this.twoWayflights, typeof (this.oneWayflights));
        },
          error => { console.log(error); });
    }
    // else {
    this.flightBookingService.getOneWayFlight(this.flightOne)
      .subscribe(data => {
        this.oneWayflights = data;
        //  this.roundWay = false;
        this.isoneWay = true;
        console.log(this.oneWayflights, typeof (this.oneWayflights));
      },
        error => {
          console.log(error);
        });
  }
  onConfirmBooking() {
    if (this.twoSelect) {
      // this.
      this.sharedService.id1 = this.oneSelect;
      this.sharedService.id2 = this.twoSelect;
      this.sharedService.departureDate = this.departureDate;
      this.sharedService.returnDate = this.returnDate;
      this.router.navigate(['confirmBooking']);
    }
    else {
      this.twoSelect = 0;
      this.sharedService.id1 = this.oneSelect;
      this.sharedService.id2 = this.twoSelect;
      this.sharedService.departureDate = this.departureDate;
      this.sharedService.returnDate = "";
      this.router.navigate(['confirmBooking']);
    }
  }
}


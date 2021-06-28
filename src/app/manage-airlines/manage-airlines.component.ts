import { Component, OnInit } from '@angular/core';
import { Flight } from '@app/_models/flight';
import { FlightBookingService } from '@app/flight-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {

  constructor(private flightBookingService: FlightBookingService,
    private router: Router) { }

  ngOnInit() {
  }
  isAddSuccess: boolean = false;
  isAddError: boolean = false;
  cities = ["Hyderabad", "Chennai", "Delhi", "Bengaluru", "Kolkata", "Cochin", "Ahmedabad"];
  allFlights = ["IndiGo", "Air India", "SpiceJet", "GoAir", "AirAsia India", "Vistara", "Alliance Air", "TruJet"];
  flight: Flight = new Flight();

  onSubmit() {
    this.flight.businessSeats = 0;
    this.flight.nonBusinessSeats = 0;
    this.flight.isAvailable = true;
    this.flightBookingService.createFlight(this.flight).subscribe(data => {
      console.log(data)
      this.flight = new Flight();
      this.isAddSuccess = true;
      this.isAddError = false;
      this.gotoAfterSuccess();
    },
      error => {
        console.log(error);
        this.isAddSuccess = false;
        this.isAddError = true;
      });
  }

  gotoAfterSuccess() {
    this.router.navigate(['/manageAirlines']);
  }
}

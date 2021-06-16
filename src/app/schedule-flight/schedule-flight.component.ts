import { Component, OnInit } from '@angular/core';
import { FlightBookingService } from '@app/flight-booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight } from '@app/_models/flight'

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.less']
})
export class ScheduleFlightComponent implements OnInit {
  id: number;
  flight: Flight;
  isAvailableTimeWrong: boolean = false;
  isSeatsAvailableWrong: boolean = false;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.flight = new Flight();

    this.id = this.route.snapshot.params['id'];

    this.flightBookingService.getFlightById(this.id)
      .subscribe(data => {
        this.flight = data;
      },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    if ((this.flight.startTime > this.flight.endTime) || (this.flight.startTime === this.flight.endTime)) {
      this.isAvailableTimeWrong = true;
    }
    else {
      this.isAvailableTimeWrong = false;
    }
    if ((this.flight.businessSeats + this.flight.nonBusinessSeats) > this.flight.rowSeats) {
      this.isSeatsAvailableWrong = true;
    }
    else {
      this.isSeatsAvailableWrong = false;
    }
    this.updateSchedule();
  }

  updateSchedule() {
    this.flightBookingService.updateSchedule(this.id, this.flight)
      .subscribe(data => {
        this.flight = new Flight();
        this.router.navigate(['manageSchedules']);
      },
        error => {
          console.log(error);
        })
  }
}

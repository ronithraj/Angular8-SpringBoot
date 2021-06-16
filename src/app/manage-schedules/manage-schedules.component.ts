import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FlightBookingService } from '@app/flight-booking.service';
import { Observable } from "rxjs";
import { Flight } from '@app/_models/flight';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.scss']
})
export class ManageSchedulesComponent implements OnInit {
  availbleFlights: Observable<Flight[]>;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.availbleFlights = this.flightBookingService.getFlights();
  }

  onManageClick(id: number) {
    this.router.navigate(['scheduleFlight', id]);
  }
}

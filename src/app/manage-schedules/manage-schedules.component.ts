import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
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
  idB: number;
  flightB: Flight = new Flight();
  isBlocked: boolean = false;
  message: string;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.availbleFlights = this.flightBookingService.getFlights();
    console.log(this.availbleFlights);
  }

  onManageClick(id: number) {
    this.router.navigate(['scheduleFlight', id]);
  }

  onBlockClick(id: number) {
    this.idB = id;
    this.flightB.isAvailable = false;
    this.blockFlight();
  }
  onUnblockClick(id: number) {
    this.idB = id;
    this.flightB.isAvailable = true;
    this.unBlockFlight();
  }

  blockFlight() {
    this.flightBookingService.blockOrUnblockFlight(this.idB, this.flightB)
      .subscribe(data => {
        this.isBlocked = true;
        this.message = "Blocked";
      },
        error => console.log(error.message))
  };

  unBlockFlight() {
    this.flightBookingService.blockOrUnblockFlight(this.idB, this.flightB)
      .subscribe(data => {
        this.isBlocked = true;
        this.message = "Unblocked";
      },
        error => console.log(error.message))
  };

}

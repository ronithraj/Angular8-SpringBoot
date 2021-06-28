import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user'
import { FlightBookingService } from '@app/flight-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  message: string;
  isSuccess: boolean = false;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.flightBookingService.registerUser(this.newUser)
      .subscribe(user => {
        this.isSuccess = true;
        this.message = "Successfully Registered!";
        this.onSuccessGoTo();
      },
        error => {
          this.message = "Failed to Register!"
        });
  }

  onSuccessGoTo() {
    this.router.navigate(['/login']);
  }
}

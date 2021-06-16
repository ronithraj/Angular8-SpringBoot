import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.scss']
})
export class BookFlightsComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  
  roundShow: boolean = false;

  selectedRadioEventOne() {
    alert('hello');
  }
  selectedRadioEventTwo() {
    this.roundShow = true;
}
  airLineDetails = [{
    airlineName :  "Jet Airways",
    actualPrice : "Rs. 2,340"
  },
    {
     airlineName :  "SpiceJet",
    actualPrice : "Rs. 3,350"
    },
  {
    airlineName :  "Indigo",
    actualPrice : "Rs. 3,340"
  },
    {
     airlineName :  "Vistara",
    actualPrice : "Rs. 2,120"
    }]
  
  onConfirmBooking() {
    this.router.navigate(["/checkout"]);
  }
}


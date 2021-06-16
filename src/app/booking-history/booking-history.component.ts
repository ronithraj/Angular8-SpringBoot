import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ticketHistory = [
    {
    date: "24/6/2021",
    airways: "Vistara",
    price: "Rs. 3,405",
    seats: 3
    },
    {
    date: "18/6/2021",
    airways: "SpiceJet",
    price: "Rs. 2,125",
    seats: 3
    },
    {
    date: "14/6/2021",
    airways: "Indigo",
    price: "Rs. 1,005",
    seats: 1
    },
    {
    date: "12/6/2021",
    airways: "SpiceJet",
    price: "Rs. 1,125",
    seats: 2
    },
    
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.scss']
})
export class ManageFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  manageHist = [{
    airLine:"Vistara",
    price: "Rs.2212",
    date:"11-02-21",
  },
  {
    airLine:"SpiceJet",
    price: "Rs.1214",
    date:"29-01-21"
    },
  {
    airLine:"Indigo",
    price: "Rs.1429",
    date:"07-06-21"
    },
  {
    airLine:"Jet Airways",
    price: "Rs.2278",
    date:"01-07-21"
    },
  {
    airLine:"Air India",
    price: "Rs.5214",
    date:"17-06-21"
    },
  {
    airLine:"Indigo",
    price: "Rs.2234",
    date:"01-11-20"
    },
  {
    airLine:"SpiceJet",
    price: "Rs.1500",
    date:"12-04-21"
}
  ]
}

import { Component, OnInit } from '@angular/core';
import {ApartmentService} from "./apartment.service";
import {Apartment} from "../domain/apartment";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartment[] = [];

  constructor(private  apartmentService: ApartmentService){}

  ngOnInit(): void {
    this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
  }

}

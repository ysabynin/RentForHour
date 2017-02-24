import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Apartment} from "../domain/apartment";
import {ApartmentService} from "../apartments/apartment.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  title = 'Apartment';
  apartments:Apartment[];
  selectedApartment:Apartment;

  constructor(private router:Router,
              private apartmentService:ApartmentService) {
  };

  onSelect(hero:Apartment):void {
    this.selectedApartment = hero;
  }

  add(name:String):void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.apartmentService.create(name)
      .then(apartment => {
        this.apartments.push(apartment);
        this.selectedApartment = null;
      })
  }

  delete(apartment: Apartment): void {
    this.apartmentService
      .delete(apartment.id)
      .then(() => {
        this.apartments = this.apartments.filter(a => a !== apartment);
        if (this.selectedApartment === apartment) { this.selectedApartment = null; }
      });
  }

  gotoDetail():void {
    this.router.navigate(['/detail', this.selectedApartment.id]);
  }

  getHeroes():void {
    this.apartmentService.getApartments().then(heroes => this.apartments = heroes);
  }

  ngOnInit():void {
    this.getHeroes();
  }
}

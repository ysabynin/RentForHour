import {Component, Input, OnInit} from "@angular/core";
import {Apartment} from "../domain/apartment";
import {ApartmentService} from "../apartments/apartment.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  public max: number = 10;
  public rate: number = 7;
  public isReadonly: boolean = true;

  @Input()
  apartment:Apartment;

  constructor(private apartmentService:ApartmentService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  ngOnInit():void {
    console.log(this.route.params);
    this.route.params
      .switchMap((params:Params) => this.apartmentService.getApartment(params['id']))
      .subscribe(apartment => this.apartment = apartment)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.apartmentService.update(this.apartment)
      .then(() => this.goBack());
  }
}

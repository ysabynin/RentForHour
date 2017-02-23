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
  hero:Apartment;

  constructor(private heroService:ApartmentService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  ngOnInit():void {
    this.route.params
      .switchMap((params:Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}

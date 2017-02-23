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
  title = 'Tour of Heroes1';
  heroes:Apartment[];
  selectedHero:Apartment;

  constructor(private router:Router,
              private apartmentService:ApartmentService) {
  };

  onSelect(hero:Apartment):void {
    this.selectedHero = hero;
  }

  add(name:String):void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.apartmentService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Apartment): void {
    this.apartmentService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  gotoDetail():void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes():void {
    this.apartmentService.getApartments().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void {
    this.getHeroes();
  }
}

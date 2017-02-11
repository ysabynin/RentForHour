import { Component, OnInit } from '@angular/core';
import {HeroService} from "../service/hero.service";
import {Hero} from "../domain/hero";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private  heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

}

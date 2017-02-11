import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../domain/hero";
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  title = 'Tour of Heroes1';
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private router:Router,
              private heroService:HeroService) {
  };

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }

  add(name:String):void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService
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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void {
    this.getHeroes();
  }
}

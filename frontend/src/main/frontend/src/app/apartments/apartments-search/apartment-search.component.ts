import {HeroSearchService} from "../../service/hero-search.service";
import {OnInit, Component} from "@angular/core";
import {Hero} from "../../domain/hero";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs/Rx";
@Component({
  moduleId: module.id,
  selector: 'apartment-search',
  templateUrl: 'apartment-search-component.html',
  styleUrls: ['apartment-search.component.css'],
  providers: [HeroSearchService]
})
export class ApartmentsSearchComponent implements OnInit {
  heroes:Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  search(term:string):void {
    this.searchTerms.next(term);
  }

  ngOnInit():void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      })
  }
l
  gotoDetail(hero:Hero):void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

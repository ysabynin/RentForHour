import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Apartment} from "../domain/apartment";
@Injectable()
export class HeroSearchService{
  constructor(private http: Http){}

  search(term : String) : Observable<Apartment[]>{
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r:Response) => r.json().data as Apartment[]);
  }
}

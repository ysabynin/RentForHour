import {Injectable} from "@angular/core";
import {Apartment} from "../domain/apartment";
import {Http, Headers, Jsonp} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApartmentService {
  private apiURL = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'applicaiton/json'});

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error("An error occured", error);
    return Promise.reject(error.message || error);
  }

  create(name: String): Promise<Apartment> {
    return this.http
      .post(this.apiURL, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Apartment): Promise<Apartment>{
    const url = `${this.apiURL}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getApartment(id:string):Promise<Apartment> {
    console.log(id)
    const url = `${this.apiURL}/apartments/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Apartment)
      .catch(this.handleError);
  }

  getApartments():Promise<Apartment[]> {
    return this.http.get(`${this.apiURL}/apartments`)
      .toPromise()
      .then(response => response.json() as Apartment[])
      .catch(this.handleError);
  }

  getHeroesSlowly():Promise<Apartment[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getApartments()), 2000);
    });
  }
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import './rxjs-extensions';


import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent} from "./app.component";
import {HeroesComponent} from "./apartments/heroes.component";
import {HeroDetailComponent} from "./details/hero-detail.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./welcome/dashboard.component";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";
import {SidenavComponent} from "./sidenav/sidenav.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

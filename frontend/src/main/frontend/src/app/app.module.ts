import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import './rxjs-extensions';


import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import {AppComponent} from "./app.component";
import {HeroService} from "./service/hero.service";
import {HeroSearchService} from "./service/hero-search.service";

import {
  AlertModule,
  ButtonsModule,
  DropdownModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TooltipModule,
  ModalModule,
  TypeaheadModule, CarouselModule
} from 'ng2-bootstrap';
import {NavbarComponent} from "./navbar/navbar.component";
import {CabinetModule} from "./cabinet/cabinet.module";
import {ApartmentsModule} from "./apartments/apartments.module";
import {ApartmentDetailsModule} from "./apartment-details/apartment-details.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    DropdownModule.forRoot(),
    RatingModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
    ApartmentsModule,
    ApartmentDetailsModule,
    CabinetModule
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

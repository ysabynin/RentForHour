import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import './rxjs-extensions';


import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {ApartmentService} from "./apartments/apartment.service";
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
import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    DropdownModule.forRoot(),
    RatingModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
    ApartmentsModule,
    ApartmentDetailsModule,
    CabinetModule,
    LoginModule,
    RegisterModule
  ],
  providers: [ApartmentService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

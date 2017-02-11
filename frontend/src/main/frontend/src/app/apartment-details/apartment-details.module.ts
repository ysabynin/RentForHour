import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentDetailsComponent } from './apartment-details.component';
import {RatingModule, CarouselModule} from "ng2-bootstrap/index";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    RatingModule
  ],
  declarations: [ApartmentDetailsComponent]
})
export class ApartmentDetailsModule { }

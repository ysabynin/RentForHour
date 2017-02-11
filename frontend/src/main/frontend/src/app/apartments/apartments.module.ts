import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApartmentsComponent} from "./apartments.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ApartmentsComponent]
})
export class ApartmentsModule { }

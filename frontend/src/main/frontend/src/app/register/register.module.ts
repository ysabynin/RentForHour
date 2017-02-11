import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterUserComponent} from "./user/register-user.component";
import {RegisterApartmentComponent} from "./apartment/register-apartment.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [RegisterUserComponent, RegisterApartmentComponent]
})
export class RegisterModule { }

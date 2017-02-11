import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CabinetComponent} from "./cabinet/cabinet.component";
import {ApartmentsComponent} from "./apartments/apartments.component";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";
import {LoginComponent} from "./login/login.component";
import {RegisterApartmentComponent} from "./register/apartment/register-apartment.component";
import {RegisterUserComponent} from "./register/user/register-user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/apartments',
    pathMatch: 'full'
  },
  {
    path: 'apartments/:id',
    component: ApartmentDetailsComponent
  },
  {
    path: 'apartments',
    component: ApartmentsComponent
  },
  {
    path: 'cabinet',
    component: CabinetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register/user',
    component: RegisterUserComponent
  },
  {
    path: 'register/apartment',
    component: RegisterApartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

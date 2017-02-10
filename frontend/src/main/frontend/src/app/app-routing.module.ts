import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CabinetComponent} from "./cabinet/cabinet.component";
import {ApartmentsComponent} from "./apartments/apartments.component";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

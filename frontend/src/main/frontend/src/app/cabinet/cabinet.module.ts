import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import {ButtonsModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }

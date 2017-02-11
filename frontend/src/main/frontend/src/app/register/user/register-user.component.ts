import { Component, OnInit } from '@angular/core';
import {RegisteredUser} from "../../domain/registered-user";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: RegisteredUser = new RegisteredUser("","","","");

  constructor() { }

  ngOnInit() {
  }

}

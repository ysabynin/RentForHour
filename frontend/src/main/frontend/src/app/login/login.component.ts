import { Component, OnInit } from '@angular/core';
import {User} from "../domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User("","");

  constructor() { }


  login(){
    console.log(this.user.username+" "+this.user.password);
  }

  ngOnInit() {
  }

}

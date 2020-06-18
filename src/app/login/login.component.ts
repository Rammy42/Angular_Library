import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  showSpinner:Boolean = false;
  constructor(private router: Router,private uerService : UsersService) {
      // redirect to home if already logged in
     
  }

  ngOnInit() {
    this.showSpinner=false;
  }

  login() : void {
    this.showSpinner=true;
    if(this.username == 'admin' && this.password == 'admin'){
      this.uerService.setLogedInUser(this.username)
     this.router.navigate(["dpt"]);
    }else {
      alert("Invalid credentials");
    }
    this.showSpinner=false;
  }

}

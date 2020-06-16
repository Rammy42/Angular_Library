import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  username: string;
  password: string;
  showSpinner:Boolean = false;
  constructor(private router: Router) {
      // redirect to home if already logged in
     
  }

  ngOnInit() {
    this.showSpinner=false;
  }

  login() : void {
    this.showSpinner=true;
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["dpt"]);
    }else {
      alert("Invalid credentials");
    }
    this.showSpinner=false;
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  err : boolean = true;
 jwt = null;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
 error = null;

  onSubmit(form : NgForm) { 
    this.err = true;
    this.Login(this.user);
    form.reset();
  }
  check(){
    if(this.err == true){
      return false;
    }else{
      return true;
    }
  }

  Login(user : User){
    this.loginService.login(user).subscribe(data => {
      this.jwt = data;
      localStorage.setItem("tokenKey", this.jwt["access_token"]);
      localStorage.setItem("email", this.jwt["username"]);
      this.router.navigate(['/beers']);
    },
    error => this.error = error);
//console.log(this.error["status"]);
this.err = false;
  }

}

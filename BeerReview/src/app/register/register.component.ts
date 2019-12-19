import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  err : boolean = true;
 jwt = null;
  constructor(private registerService: LoginService, private router: Router) { }

  ngOnInit() {
  }
 error = null;

  onSubmit(form : NgForm) { 
    this.err = true;
    this.Register(this.user);
    form.reset();
  }
  check(){
    if(this.err == true){
      return false;
    }else{
      return true;
    }
  }

  Register(user : User){
    this.registerService.register(user).subscribe(data => {
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'BeerReview';
  check(){
    var token = localStorage.getItem("tokenKey");
    if(token == null){
      return true;
    }else{
      return false;
    }
  }
}

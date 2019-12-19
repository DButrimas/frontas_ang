import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/Beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private beerService : BeerService) { }

  check(){
    var token = localStorage.getItem("tokenKey");
    if(token == null){
      return false;
    }else{
      return true;
    }
  }
  ngOnInit() {
    this.beerService.getBeers().subscribe(data => {
      this.beers = data;
    })
  }

}

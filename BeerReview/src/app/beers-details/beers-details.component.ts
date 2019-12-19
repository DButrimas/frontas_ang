import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/Beer';
import { BeerService } from '../beer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beers-details',
  templateUrl: './beers-details.component.html',
  styleUrls: ['./beers-details.component.css']
})
export class BeersDetailsComponent implements OnInit {
beer : Beer;


  constructor(private route: ActivatedRoute,
    private entryService: BeerService,
    private location : Location) { }

  ngOnInit() {
    this.getBeer();
  }

  getBeer(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.getBeer(id).subscribe(beer => this.beer = beer);
  }

}

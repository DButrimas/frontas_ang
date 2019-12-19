import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beers-delete',
  templateUrl: './beers-delete.component.html',
  styleUrls: ['./beers-delete.component.css']
})
export class BeersDeleteComponent implements OnInit {

  constructor(private beerService : BeerService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var a = this.route.snapshot.paramMap.get('id');
    this.myFunction(a);
  }
  myFunction(id : any){
    this.beerService.delete(id).subscribe();
    this.router.navigate(['/beers']);
  }
}

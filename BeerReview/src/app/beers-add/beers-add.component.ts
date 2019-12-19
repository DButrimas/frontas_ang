import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Beer } from '../models/Beer';
import { BeerService } from '../beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beers-add',
  templateUrl: './beers-add.component.html',
  styleUrls: ['./beers-add.component.css']
})
export class BeersAddComponent implements OnInit {

  modalRef: BsModalRef;
  beer : Beer = new Beer();

  constructor(private modalService: BsModalService, private beerService : BeerService, private router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit(form : NgForm) { 
    this.addEntry(this.beer);
    form.reset();
    this.modalRef.hide()
  }
  addEntry(beer : Beer){
    this.beerService.addBeer(beer).subscribe();
    this.router.navigate(['/beers']);
  }

  ngOnInit() {
  }

}

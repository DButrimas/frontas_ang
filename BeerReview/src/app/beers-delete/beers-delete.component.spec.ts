import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersDeleteComponent } from './beers-delete.component';

describe('BeersDeleteComponent', () => {
  let component: BeersDeleteComponent;
  let fixture: ComponentFixture<BeersDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './models/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
beer : Beer;
  url : string = "https://localhost:44369/api/";
  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  errorMessage : null;
  getBeers(): Observable<Beer[]>{
    return this.http.get<Beer[]>(`${this.url}Beers`);
  }

  getBeer(id : number): Observable<Beer>{
  return this.http.get<Beer>(`${this.url}Beers/${id}`);
  }

  addBeer(beer : Beer): Observable<Beer>{
    var token = localStorage.getItem("tokenKey");
    return this.http.post<Beer>(`${this.url}Beers`,beer,{headers : {'Authorization' : 'Bearer ' + token}});
  }
  delete(id : number): Observable<Beer>{
    
    var token = localStorage.getItem("tokenKey");
    return this.http.post<Beer>(`${this.url}Beers/delete/${id}`,this.beer,{headers : {'Authorization' : 'Bearer ' + token}});

  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = "https://localhost:44369/api/";
  constructor(private http: HttpClient) { }

  login(user : User): Observable<User>{
    return this.http.post<User>(`${this.url}account/login`,user);
  }

  
  register(user : User): Observable<User>{
    return this.http.post<User>(`${this.url}account/register`,user);
  }

}

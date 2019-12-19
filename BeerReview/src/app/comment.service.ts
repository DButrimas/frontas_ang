import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from './models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }


  url : string = "https://localhost:44369/api/Beers/";

  getComments(id : number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.url}${id}/comments`);
  }

  addComment(id : number, comment : Comment): Observable<Comment>{
    return this.http.post<Comment>(`${this.url}${id}/comments`,comment);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Comment} from "../Comment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment, httpOptions);
  }

  updateComment(comment: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/${comment.id}`;
    return this.http.put<Comment>(url, comment, httpOptions);
  }

  deleteComment(comment: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/${comment.id}`;
    return this.http.delete<Comment>(url);
  }

}

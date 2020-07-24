import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private  httpClient: HttpClient) { }
  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getPostComments(postId): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
  getCommentById(id): Observable<Comment> {
    return this.httpClient.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}

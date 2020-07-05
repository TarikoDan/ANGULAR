import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  getAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=100');
  }
  getPostsByUserId(UserId): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`);
  }
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}

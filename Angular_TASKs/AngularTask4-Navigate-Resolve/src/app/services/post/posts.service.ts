import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
  getPost(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/Comment';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService  implements CanDeactivate<any>{

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
  // tslint:disable-next-line:max-line-length
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('Do you really want leave this Awesome page???');
  }
}

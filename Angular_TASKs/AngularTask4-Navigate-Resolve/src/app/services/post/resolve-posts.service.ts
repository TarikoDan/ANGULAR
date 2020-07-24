import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class ResolvePostsService implements Resolve<Post[]>{

  constructor(private postsService: PostsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    console.log(history.state.currentUser);
    return history.state.currentUser ? this.postsService.getUserPosts(history.state.currentUser.id) : this.postsService.getAllPosts();
  }
}

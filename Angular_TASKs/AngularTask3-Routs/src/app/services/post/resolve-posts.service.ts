import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class ResolvePostsService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    if (!!route.params.UserId) {
      return this.postService.getPostsByUserId(route.params.UserId);
    }else {
      return this.postService.getAllPosts();
    }
  }
}

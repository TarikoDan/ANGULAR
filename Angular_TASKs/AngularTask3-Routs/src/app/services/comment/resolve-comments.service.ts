import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Comment} from '../../models/Comment';
import {CommentService} from './comment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveCommentsService  implements Resolve<Comment[]>{

  constructor(private commentService: CommentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    if (!!route.params.PostId) {
      return this.commentService.getCommentsByPostId(route.params.PostId);
    }else {
      return this.commentService.getAllComments();
    }
  }
}

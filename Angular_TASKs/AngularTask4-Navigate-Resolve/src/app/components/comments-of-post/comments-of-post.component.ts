import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/Comment';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent {
  comments: Comment[];
  constructor(private  activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(history.state);
      // tslint:disable-next-line:max-line-length
      return value.id
        ? this.commentService.getPostComments(value.id).subscribe(res => this.comments = res)
        : this.commentService.getAllComments().subscribe(com => this.comments = com);
    });
  }
}

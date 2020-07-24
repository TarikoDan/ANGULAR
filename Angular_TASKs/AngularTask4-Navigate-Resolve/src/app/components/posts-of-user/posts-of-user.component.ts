import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent {
  posts: Post[];
  isCommentsShown = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsOfUser);
  }

  showComments(postId: number): void {
    this.isCommentsShown = true;
    this.activatedRoute.params.subscribe(value => {
      const userId = history.state.userId;
      this.router.navigate(['users', userId, 'posts', postId, 'comments'], {state: {postId, userId}});
    });
  }
}

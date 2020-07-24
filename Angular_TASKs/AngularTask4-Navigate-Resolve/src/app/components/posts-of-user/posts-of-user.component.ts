import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent {
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsOfUser);
  }
}

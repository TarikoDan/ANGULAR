import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(data => {
      if (data.id) {
        this.postService.getPostsByUserId(data.id).subscribe(resp => this.posts = resp);
      }else {
        this.postService.getAllPosts().subscribe(resp => this.posts = resp);
      }
    });
  }

}

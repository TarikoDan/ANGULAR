import { Component, OnInit } from '@angular/core';
import {Post} from '../Post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  posts: Post[];
  postX: Post;
  selectedPost: Post;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.posts = value.loadedPosts);
  }

  selectPost(): void {
    this.selectedPost = this.posts.find(value => value.id === +this.postX);
  }
}

import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.posts);
  }

  ngOnInit(): void {
  }

}

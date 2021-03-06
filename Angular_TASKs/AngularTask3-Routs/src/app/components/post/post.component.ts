import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  isCommentsShown = false;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.postId).subscribe(resp => this.post = resp);
    });
  }
  showComments(): void {
    this.isCommentsShown = !this.isCommentsShown;
  }

  ngOnInit(): void {
  }

}

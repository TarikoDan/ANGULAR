import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {
  @Input()
  userId: number;
  postsOfUser: Post[];
  constructor(private postService: PostService) {
    this.postService.getPostsByUserId(this.userId).subscribe(resp => this.postsOfUser = resp);
  }

  ngOnInit(): void {
  }

}

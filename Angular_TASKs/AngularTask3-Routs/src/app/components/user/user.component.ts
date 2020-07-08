import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  posts: Post[];
  isPostShown = false;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(data => {
      this.userService.getUserById(data.id).subscribe(resp => this.user = resp);
    });
  }
  showPosts(): void {
    // this.postService.getPostsByUserId(userId).subscribe(resp => this.posts = resp);
    this.isPostShown = !this.isPostShown;
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {UserService} from '../../servises/user.service';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  posts: Post[];
  comments: Comment[];
  isPostShown:boolean = false;
  isCommentsShown:boolean = false;
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(resp => this.users = resp);
    this.userService.getAllPosts().subscribe(resp => this.posts = resp);
    this.userService.getAllComments().subscribe(resp => this.comments = resp);
  }
  toggleShowAllPosts(): void {
    this.isPostShown = !this.isPostShown;
  }toggleShowAllComments(): void {
    this.isCommentsShown = !this.isCommentsShown;
  }
}

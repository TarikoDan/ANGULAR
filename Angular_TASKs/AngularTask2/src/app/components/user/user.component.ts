import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {UserService} from '../../servises/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  posts: Post[];
  isPostsShown: boolean = false;
  constructor(private userService: UserService) { }
  userIdPosts(userId: number): void {
    console.log(userId);
    this.userService.getPostsByUserId(this.user.id).subscribe(resp => this.posts = resp);
    this.isPostsShown = !this.isPostsShown;
  }

  ngOnInit(): void {
  }

}

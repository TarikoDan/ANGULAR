import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      // this.user = history.state.currentUser;
      this.user = this.router.getCurrentNavigation().extras.state.currentUser;
    });
  }

  showUserPosts(userId: number): void {
    this.router.navigate(['users', userId, 'posts'], {state: {userId}});
  }
}

import { Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users: User[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.users);
  }
  selectUser(user: User): void {
    this.router.navigate(['users', user.id], {state: {currentUser: user}});
  }
}

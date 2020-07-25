import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];
  userId: number;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }
  showUser(user): void {
    this.router.navigate(['users', user.id], {state: {currentUser: user}});
  }
  xxx(): void {
    console.log(this.userId);
    this.userService.getUserById(this.userId).subscribe(value => console.log(value));
  }
}

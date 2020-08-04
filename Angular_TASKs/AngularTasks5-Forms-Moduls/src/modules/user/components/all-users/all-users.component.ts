import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];
  userId: number;
  userName: string;
  filteredUsers: User[];
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }
  showUser(user): void {
    this.router.navigate(['users', user.id], {state: {currentUser: user}});
  }
  xxx(): void {
    this.userService.getUserById(this.userId).subscribe(value => console.log(value));
  }

  getInputValue(form: NgForm): void {
    console.log('values:', form.controls.userId.value, ',',  form.controls.userName.value);
  }

  filterUsers(): void {
    const res = this.users.filter(user => {
      return user.id === +this.userId || user.name.toLowerCase().includes(this.userName?.toLowerCase());
    }) as User[];
    this.filteredUsers = res;
  }
}

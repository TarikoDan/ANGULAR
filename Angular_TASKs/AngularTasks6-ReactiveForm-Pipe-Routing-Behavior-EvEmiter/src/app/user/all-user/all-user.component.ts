import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';
import {NgForm} from '@angular/forms';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: User[];
  user: User;
  constructor(private userService: UserService, private dataService: DataService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

  getUser(formUser: NgForm): void {
    console.log(formUser.controls.user.value);
    console.log(this.user);
    this.dataService.state.next({username: this.user, counter: this.dataService.state.getValue().counter});
  }
}

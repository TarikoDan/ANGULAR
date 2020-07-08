import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.css']
})
export class AllUsersComponent implements OnInit {
  // @Input()
  // user: User;
  users: User[];
  constructor(private  userService: UserService) {
    this.userService.getUsers().subscribe(resp => this.users = resp);
  }

  ngOnInit(): void {
  }

}

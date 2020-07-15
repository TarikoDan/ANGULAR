import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  isPostShown = false;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.data.subscribe(value => this.user = value.user);
    // this.activatedRoute.params.subscribe(data => {
    //   this.userService.getUserById(data.id).subscribe(resp => this.user = resp);
    // });
  }
  showPosts(): void {
    this.isPostShown = !this.isPostShown;
  }

  ngOnInit(): void {
  }

}

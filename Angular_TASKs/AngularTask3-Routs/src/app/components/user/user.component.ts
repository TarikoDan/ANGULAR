import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // @Input()
  user: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(data => {
      this.userService.getUserById(data.id).subscribe(resp => this.user = resp);
    });
  }

  ngOnInit(): void {
  }

}

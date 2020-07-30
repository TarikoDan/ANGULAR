import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {User} from './userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user0: User = {
    id: 0,
    name: '',
    password: ''
  };
  user1;
  user2;
  user3: User;
  passValue: string;
  userX: User ;
  errors = {
    less5: 'the number of characters is less than 5',
    more10: 'the number of characters is more than 10',
    exhausted: 'The number of available registrations is exhausted'
  };
  constructor() {
  }

  ngOnInit(): void {
  }

  reg(n: NgModel, p: NgModel): void {
    if (!this.user1) {
      this.user1 = {
        id: 1,
        name: n.value,
        password: p.value,
      };
    } else if (!this.user2) {
      this.user2 = {
        id: 2,
        name: n.value,
        password: p.value,
      };
    } else if (!this.user3) {
      this.user3 = {
        id: 3,
        name: n.value,
        password: p.value,
      };
    } else {
      return null;
    }
  }

  visiblePass(input): void {
    this.passValue = input.value;
  }
  unvisiblePass(): void {
    this.passValue = undefined;
  }

  log(): void {
    console.log(this.user0);
    console.log(this.user1);
    console.log(this.user2);
    console.log(this.user3);
    this.userX = {
      id: 0,
      name: '',
      password: ''
    };
    if (this.user1 && this.user0.name === this.user1.name && this.user0.password === this.user1.password) {
      this.userX = this.user1;
    }
    if (this.user2 && this.user0.name === this.user2.name && this.user0.password === this.user2.password) {
      this.userX = this.user2;
    }
    if (this.user3 && this.user0.name === this.user3.name && this.user0.password === this.user3.password) {
      this.userX = this.user3;
    }
  }

  logForm(formLogin: NgForm): void {
    console.log(formLogin);
  }
}

import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../models/User';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveUserService implements Resolve<User[]>{

  constructor(private userService: UserService) { }
  resolve(): Observable<User[]> {
    return this.userService.getUsers();
  }
}

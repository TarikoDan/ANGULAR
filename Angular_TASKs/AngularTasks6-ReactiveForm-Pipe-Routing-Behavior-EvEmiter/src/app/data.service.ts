import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  state: BehaviorSubject<any> = new BehaviorSubject<any>({counter: 0, username: ''});
  constructor() { }
}

import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private http: HttpClient;
  //
  // constructor(http: HttpClient) {
  //   this.http = http
  // }
  users: any[];
  posts: any[];
  // comments: any[];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response);
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts/?_limit=10')
      .subscribe(resp => this.posts = resp);
    // this.http.get('https://jsonplaceholder.typicode.com/comments/?_limit=10')
    //   .subscribe(resp => this.comments = resp);
  }
}

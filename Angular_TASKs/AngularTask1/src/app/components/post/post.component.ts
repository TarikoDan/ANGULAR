import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: any;
  comments: any[];

  constructor(private  http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/comments/?_limit=10')
      .subscribe(resp => this.comments = resp);
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask4-Navigate-Resolve';
  constructor(private router: Router) {
  }
  showUsers(): void {
    this.router.navigate(['users']);
  }

  home(): void {
    this.router.navigate(['']);
  }
}

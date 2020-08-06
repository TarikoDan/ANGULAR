import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTasks6-ReactiveForm-Pipe-Routing-Behavior-EvEmiter';

  constructor(private router: Router, private dataService: DataService) {
  }
  goCounter(): void {
    this.router.navigate(['counter']);
  }
}

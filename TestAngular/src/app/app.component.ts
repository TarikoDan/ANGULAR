import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1>
             <h1>{{name}}</h1>
            <app-user title="aaaaa" name="bbbbbbbbb"></app-user>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAngular';
  name = 'Taras';
}

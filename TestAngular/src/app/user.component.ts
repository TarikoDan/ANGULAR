import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: '{{title}} - {{name}}',
  styles: ['']
})
export class UserComponent {
  @Input()
  title: string;
  @Input()
  name: number;
}

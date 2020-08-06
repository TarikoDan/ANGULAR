import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private value = this.dataService.state.getValue().counter;

  constructor(private dataService: DataService) { }
  inc(): void {
    this.dataService.state.next({counter: ++this.value, username: this.dataService.state.getValue().username});
  }
  dec(): void {
    if (this.value > 0) {
      this.dataService.state.next({counter: --this.value, username: this.dataService.state.getValue().username});

    }
  }

  ngOnInit(): void {
  }

}

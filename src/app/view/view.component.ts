import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  value = null;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
  	this.counterService.observable.subscribe(val => this.value = val);
  }

  add() {
  	this.counterService.add(1);
  }
}

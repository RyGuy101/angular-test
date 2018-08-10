import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterStore = new BehaviorSubject(0);
  observable = this.counterStore.asObservable();

  add(amount) {
    this.counterStore.next(this.counterStore.value + amount);
  }
}

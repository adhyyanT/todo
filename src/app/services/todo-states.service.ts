import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoStatesService {
  todoStates = ['All', 'Finished', 'Unfinished'];
  currentState = new BehaviorSubject('All');

  constructor() {}

  getState() {
    return this.currentState.asObservable();
  }
  getAllStates() {
    return this.todoStates;
  }
  setState(state: string) {
    this.currentState.next(state);
  }
}

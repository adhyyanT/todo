import { Component } from '@angular/core';
import { TodoStatesService } from 'src/app/services/todo-states.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  todoStates: string[];
  currentState: string = '';

  constructor(private todoStateService: TodoStatesService) {
    todoStateService
      .getState()
      .subscribe((state) => (this.currentState = state));
    this.todoStates = todoStateService.getAllStates();
  }

  onClick(event: MouseEvent, state: string) {
    this.currentState = state;
    this.todoStateService.setState(state);
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TodoStatesService } from 'src/app/services/todo-states.service';
import { allTodosType } from 'src/app/types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnChanges, OnInit {
  @Input() todoProp = '';
  allTodos: allTodosType[] = [];

  state: string = '';

  constructor(private todoStateService: TodoStatesService) {}

  ngOnInit(): void {
    this.todoStateService.getState().subscribe((value) => {
      this.state = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.todoProp) return;
    this.allTodos.push({
      content: changes['todoProp'].currentValue,
      status: 'Unfinished',
    });
  }

  toggleState(index: number) {
    this.allTodos.map((todo, i) => {
      if (i === index) {
        if (todo.status === 'Finished') {
          todo.status = 'Unfinished';
        } else {
          todo.status = 'Finished';
        }
      }
    });
  }
  handleDelete(index: number) {
    this.allTodos = this.allTodos.filter((todo, i) => {
      return index !== i;
    });
  }
}

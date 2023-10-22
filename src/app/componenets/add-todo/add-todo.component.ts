import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todoInput = '';
  todoProp = '';

  constructor() {}

  handleAddTodo() {
    this.todoProp = this.todoInput;
    this.todoInput = '';
  }
}

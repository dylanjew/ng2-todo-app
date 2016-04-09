import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";

import { Todo } from "./todo";
import { TodoService } from "./todo.service";

@Component ({
  selector: "todo-list",
  templateUrl: "app/todos.component.html",
  styleUrls: ["app/todos.component.css"]
})

export class TodoListComponent implements OnInit {
  selectedTodo: Todo;
  public todos: Todo[];

  constructor(
    private _todoService: TodoService,
    private _router: Router) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos().then(todos => this.todos = todos);
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

  toggleChecked(todo: Todo) {
    todo.checked = !todo.checked;
  }
}
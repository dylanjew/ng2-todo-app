import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";

import { Todo }                from "./todo";
import { TodoDetailComponent } from "./todo-detail.component";

import { TodoService }         from "./todo.service";

@Component ({
  selector: "todo-list",
  templateUrl: "public/todos.component.html",
  styleUrls: ["public/todos.component.css"],
  directives: [TodoDetailComponent]
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

  gotoDetail() {
    let link = ["TodoDetail", { id: this.selectedTodo.id }];
    this._router.navigate(link);
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

  toggleChecked(todo: Todo) {
    todo.checked = !todo.checked;
  }
}
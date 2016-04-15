import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";

import { Todo }        from "./todo";
import { TodoService } from "./todo.service";

@Component({
  selector: "dashboard",
  templateUrl: "public/dashboard.component.html",
  styleUrls: ["public/dashboard.component.css"]
})

export class DashboardComponent {
  todos: Todo[];

  constructor(
    private _todoService: TodoService,
    private _router: Router) { };

  ngOnInit() {
    this._todoService.getTodos()
      .then(todos => this.todos = todos.slice(0, 5));
  }

  gotoDetail(todo: Todo) {
    let link = ["TodoDetail", { id: todo.id }];
    this._router.navigate(link);
  }
}
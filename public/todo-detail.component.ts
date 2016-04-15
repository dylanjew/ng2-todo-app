import { Component, Input, OnInit } from "angular2/core";
import { RouteParams } from "angular2/router";

import { Todo } from "./todo";
import { TodoService } from "./todo.service";

@Component({
  selector: "todo-detail",
  templateUrl: "public/todo-detail.component.html",
  styleUrls: ["public/todo-detail.component.css"]
})

export class TodoDetailComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(
    private _todoService: TodoService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    // cast the string param to a number
    let id = +this._routeParams.get("id");
    this._todoService.getTodo(id)
      .then(todo => this.todo = todo);
  }

  goBack() {
    window.history.back();
  }
}

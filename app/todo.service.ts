import { TODOS } from "./mock-todos";
import { Todo } from "./todo";
import { Injectable } from "angular2/core";

@Injectable ()
export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }

  getTodo(id) {
    return Promise.resolve(TODOS).then(
      todos => todos.filter(todo => todo.id === id)[0]
    );
  }
}
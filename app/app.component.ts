import { Component }       from "angular2/core";
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import { DashboardComponent } from "./dashboard.component";
import { TodoListComponent } from "./todos.component";

import { TodoService } from "./todo.service";
@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['TodoList']">Todos</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ["app/app.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})

@RouteConfig([
  {
    path: "/todos",
    name: "TodoList",
    component: TodoListComponent
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = "Sample Todo Website";
}

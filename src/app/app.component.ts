import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { ITodoList } from '../models/todoList';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todoLists: Observable<ITodoList[]>;
  todos: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoLists = this.todoService.getTodoLists();
  }

  getTodos(list: ITodoList) {
    console.log(list.id);

    this.todos = this.todoService.getTodosByListId(list.id);
  }
}

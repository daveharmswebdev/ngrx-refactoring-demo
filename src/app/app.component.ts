import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { ITodoList } from '../models/todoList';
import { ITodo } from '../models/todo';

// ngrx
import { Store } from '@ngrx/store';
import { IAppState } from '../models/appState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoLists: Observable<ITodoList[]>;
  todoStoreLists$: Observable<ITodoList[]>;
  todos: Observable<ITodo[]>;
  currentList: number = null;
  todoBeingEditted: ITodo = null;
  creating = false;

  get editButtonText(): string {
    return this.creating ? 'Create Todo' : 'Submit Edit';
  }

  constructor(
    private todoService: TodoService,
    private store: Store<IAppState>
  ) {
    this.todoStoreLists$ = this.store.select('todoLists');
  }

  ngOnInit() {
    this.todoLists = this.todoService.getTodoLists();
  }

  getTodos(list: ITodoList) {
    this.todos = this.todoService.getTodosByListId(list.id);
    this.todos.subscribe(todos => {
      this.currentList = todos.length ? todos[0].listId : null;
    });
  }

  deleteTodo(todo: ITodo) {
    const currentList = todo.listId;
    this.todoService.deleteTodo(todo.id)
    .then((response: any) => {
      this.todos = this.todoService.getTodosByListId(todo.listId);
    });
  }

  editTodo(todo) {
    this.todoBeingEditted = Object.assign({}, todo);
  }

  submitEdit(todo) {
    if (this.creating) {
      this.todoService.postNewTodo(todo)
      .then((response: any) => {
        this.todoBeingEditted = null;
        this.creating = false;
        this.todos = this.todoService.getTodosByListId(response.listId);
      });
    } else {
      this.todoService.putTodo(todo)
      .then((response: any) => {
        this.todoBeingEditted = null;
        this.todos = this.todoService.getTodosByListId(response.listId);
      });
    }
  }

  addNewTodo(todos) {
    this.creating = true;
    this.todoBeingEditted = {
      id: null,
      listId: this.currentList,
      todo: '',
      complete: false
    };
  }
}

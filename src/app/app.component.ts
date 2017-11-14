import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { ITodoList } from './models/todoList';
import { ITodo } from './models/todo';

// ngrx
import { Store } from '@ngrx/store';
import { IAppState } from './models/appState';
import * as ListActions from './actions/todo-list.actions';
import * as TodoActions from './actions/todo-crud.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoStoreLists$: Observable<ITodoList[]>;
  todos$: Observable<ITodo[]>;
  currentList: number = null;
  todoBeingEditted: ITodo = null;
  creating = false;

  get editButtonText(): string {
    return this.creating ? 'Create Todo' : 'Submit Edit';
  }

  constructor(
    private store: Store<IAppState>
  ) {
    this.todoStoreLists$ = this.store.select('todoLists');
    this.todos$ = this.store.select('todos');
  }

  ngOnInit() {
    this.store.dispatch(new ListActions.FetchList());
  }

  selectList(list: ITodoList) {
    this.store.dispatch(new ListActions.SelectList(list.id));
  }

  // getTodos(list: ITodoList) {
  //   this.todos = this.todoService.getTodosByListId(list.id);
  //   this.todos.subscribe(todos => {
  //     this.currentList = todos.length ? todos[0].listId : null;
  //   });
  // }

  // deleteTodo(todo: ITodo) {
  //   const currentList = todo.listId;
  //   this.todoService.deleteTodo(todo.id)
  //   .then((response: any) => {
  //     this.todos = this.todoService.getTodosByListId(todo.listId);
  //   });
  // }

  editTodo(todo) {
    this.todoBeingEditted = Object.assign({}, todo);
  }

  submitEdit(todo) {
    if (this.creating) {
      this.store.dispatch(new TodoActions.EditTodo(todo));
      this.todoBeingEditted = null;
    } else {
      this.store.dispatch(new TodoActions.EditTodo(todo));
      this.todoBeingEditted = null;
    }
  }

  // addNewTodo(todos) {
  //   this.creating = true;
  //   this.todoBeingEditted = {
  //     id: null,
  //     listId: this.currentList,
  //     todo: '',
  //     complete: false
  //   };
  // }
}

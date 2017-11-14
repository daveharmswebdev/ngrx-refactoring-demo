import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { ITodoList } from './models/todoList';
import { ITodo } from './models/todo';

// ngrx
import { Store } from '@ngrx/store';
import { IAppState } from './models/appState';
import * as ListActions from './actions/list.actions';
import * as TodoActions from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoStoreLists$: Observable<ITodoList[]>;
  todos$: Observable<ITodo[]>;
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

  deleteTodo(todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }

  editTodo(todo) {
    this.todoBeingEditted = Object.assign({}, todo);
  }

  submitEdit(todo) {
    if (this.creating) {
      this.store.dispatch(new TodoActions.PostTodo(todo));
      this.todoBeingEditted = null;
      this.creating = false;
    } else {
      this.store.dispatch(new TodoActions.EditTodo(todo));
      this.todoBeingEditted = null;
    }
  }

  addNewTodo(todos) {
    this.creating = true;
    this.todoBeingEditted = {
      id: null,
      listId: null,
      todo: '',
      complete: false
    };
  }

  changeComplete(todo: ITodo) {
    todo.complete = !todo.complete;
    this.store.dispatch(new TodoActions.UpdateCompleteStatus(todo));
  }
}

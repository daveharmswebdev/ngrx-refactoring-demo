import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { TodoService } from '../todo.service';
import { IAppState } from '../models';

import * as TodoActions from '../actions/todo.actions';
export type Action = TodoActions.All;

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store<IAppState>
  ) {}

  @Effect({ dispatch: false })
  updateCompleteStatus: Observable<void> = this.actions$
    .ofType(TodoActions.UPDATE_COMPLETE_STATUS)
    .map((action: TodoActions.UpdateCompleteStatus) => action.payload)
    .do(val => console.log(val))
    .switchMap(payload => this.todoService.putTodo(payload))
    .map(response => console.log(response));

  @Effect()
  editTodo: Observable<Action> = this.actions$
    .ofType(TodoActions.EDIT_TODO)
    .map((action: TodoActions.EditTodo) => action.payload)
    .switchMap(payload => this.todoService.putTodo(payload))
    .do(val => console.log(val))
    .map(todoEdit => new TodoActions.EditTodoSuccess(todoEdit));

  @Effect()
  postTodo: Observable<Action> = this.actions$
    .ofType(TodoActions.POST_TODO)
    .withLatestFrom(this.store.select('currentTodoList'))
    .switchMap(([action, todoList]: [TodoActions.PostTodo, number]) => this.todoService.postNewTodo({
      id: null,
      listId: todoList,
      todo: action.payload.todo,
      complete: false
    }).then(newTodo => new TodoActions.PostTodoSuccess(<any>newTodo)));

  @Effect()
  deleteTodo: Observable<Action> = this.actions$
    .ofType(TodoActions.DELETE_TODO)
    .map((action: TodoActions.DeleteTodo) => action.payload)
    .switchMap(todo =>
        this.todoService.deleteTodo(todo.id)
        .then(() => new TodoActions.DeleteTodoSuccess(todo)));

}

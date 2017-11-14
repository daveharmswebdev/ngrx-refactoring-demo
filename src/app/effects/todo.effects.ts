import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { TodoService } from '../todo.service';

import * as TodoActions from '../actions/todo.actions';
export type Action = TodoActions.All;

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  @Effect()
  editTodo: Observable<Action> = this.actions$
    .ofType(TodoActions.EDIT_TODO)
    .map((action: TodoActions.EditTodo) => action.payload)
    .switchMap(payload => this.todoService.putTodo(payload))
    .do(val => console.log(val))
    .map(todoEdit => new TodoActions.EditTodoSuccess(todoEdit));

}

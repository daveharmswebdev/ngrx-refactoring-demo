import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { TodoService } from '../todo.service';

import * as ListActions from '../actions/list.actions';
export type Action = ListActions.All;

@Injectable()
export class ListEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  @Effect()
  fetchTodoLists: Observable<Action> = this.actions$
    .ofType(ListActions.FETCH_LISTS)
    .switchMap(() => this.todoService.getTodoLists())
    .do(val => console.log(val))
    .map(lists => new ListActions.FetchListSuccess(lists));

}

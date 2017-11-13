import { Action } from '@ngrx/store';
import { ITodo } from '../models';

export const FETCH_TODOS = 'FETCH_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODO_SUCCESS';

export class FetchTodos implements Action {
  readonly type = FETCH_TODOS;

  constructor(public payload: number) {}
}

export class FetchTodosSuccess implements Action {
  readonly type = FETCH_TODOS_SUCCESS;

  constructor(public payload: ITodo[]) {}
}

export type All
  = FetchTodos
  | FetchTodosSuccess;

import { Action } from '@ngrx/store';
import { ITodoList, ITodo } from '../models';

export const FETCH_LISTS = 'FETCH_LISTS';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';

export const SELECT_LIST = 'SELECT_LIST';

export const FETCH_TODOS = 'FETCH_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODO_SUCCESS';

export class FetchList implements Action {
  readonly type = FETCH_LISTS;
}

export class FetchListSuccess implements Action {
  readonly type = FETCH_LISTS_SUCCESS;

  constructor(public payload: ITodoList[]) {}
}

export class SelectList implements Action {
  readonly type = SELECT_LIST;

  constructor(public payload: number) {}
}

export class FetchTodos implements Action {
  readonly type = FETCH_TODOS;

  constructor(public payload: number) {}
}

export class FetchTodosSuccess implements Action {
  readonly type = FETCH_TODOS_SUCCESS;

  constructor(public payload: ITodo[]) {}
}

export type All
  = FetchList
  | FetchListSuccess
  | SelectList
  | FetchTodos
  | FetchTodosSuccess;

import { Action } from '@ngrx/store';
import { ITodoList } from '../models/todoList';

export const FETCH_LISTS = 'FETCH_LISTS';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';

export const SELECT_LIST = 'SELECT_LIST';

export class FetchList implements Action {
  readonly type = FETCH_LISTS;
}

export class FetchListSuccess implements Action {
  readonly type = FETCH_LISTS_SUCCESS;

  constructor(public payload: ITodoList[]) {}
}

export class SelectList implements Action {
  readonly type = SELECT_LIST;

  constructor(public payload: ITodoList) {}
}

export type All
  = FetchList
  | FetchListSuccess
  | SelectList;

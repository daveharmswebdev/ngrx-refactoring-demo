import { Action } from '@ngrx/store';
import { ITodo } from '../models';

export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';

export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: ITodo) {}
}

export class EditTodoSuccess implements Action {
  readonly type = EDIT_TODO_SUCCESS;

  constructor(public payload: any) {}
}

export type All
  = EditTodo
  | EditTodoSuccess;

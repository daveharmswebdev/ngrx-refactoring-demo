import { Action } from '@ngrx/store';
import { ITodo } from '../models';

export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';

export const POST_TODO = 'POST_TODO';
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const UPDATE_COMPLETE_STATUS = 'UPDATE_COMPLETE_STATUS';

export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: ITodo) {}
}

export class EditTodoSuccess implements Action {
  readonly type = EDIT_TODO_SUCCESS;

  constructor(public payload: any) {}
}

export class PostTodo implements Action {
  readonly type = POST_TODO;

  constructor(public payload: ITodo) {}
}

export class PostTodoSuccess implements Action {
  readonly type = POST_TODO_SUCCESS;

  constructor(public payload: ITodo) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: ITodo) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = DELETE_TODO_SUCCESS;

  constructor(public payload: ITodo) {}
}

export class UpdateCompleteStatus implements Action {
  readonly type = UPDATE_COMPLETE_STATUS;

  constructor(public payload: ITodo) {}
}

export type All
  = PostTodo
  | PostTodoSuccess
  | EditTodo
  | EditTodoSuccess
  | DeleteTodo
  | DeleteTodoSuccess
  | UpdateCompleteStatus;

import { ITodo } from '../models';

import * as TodoActions from '../actions/todo.actions';
export type Action = TodoActions.All;

export function todosReducer(state: ITodo[], action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

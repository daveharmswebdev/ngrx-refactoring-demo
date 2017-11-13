import { ITodo } from '../models';

import * as ListActions from '../actions/todo-list.actions';
export type Action = ListActions.All;

export function todosReducer(state: ITodo[], action: Action) {
  switch (action.type) {
    case ListActions.FETCH_TODOS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

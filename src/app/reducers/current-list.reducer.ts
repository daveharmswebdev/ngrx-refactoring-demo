import { ITodoList } from '../models';

import * as ListActions from '../actions/todo-list.actions';
export type Action = ListActions.All;

export function currentListReducer(state: number, action: Action) {
  switch (action.type) {
    case ListActions.SELECT_LIST:
      return action.payload;
    default:
      return state;
  }
}

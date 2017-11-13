import { ITodoList } from '../models';

import * as ListActions from '../actions/list.actions';
export type Action = ListActions.All;

export function todoListsReducer(state: ITodoList[], action: Action): ITodoList[] {
  switch (action.type) {
    case ListActions.FETCH_LISTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

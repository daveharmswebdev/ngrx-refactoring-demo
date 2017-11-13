import { ITodoList } from '../models';

import * as ListActions from '../actions/list.actions';
export type Action = ListActions.All;

export function currentListReducer(state: ITodoList, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

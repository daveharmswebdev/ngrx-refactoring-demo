import {
  IAppState,
  INITIAL_STATE,
  ITodoList,
  ITodo
} from '../models';

import * as ListActions from '../actions/list.actions';
export type Action = ListActions.All;

export function storeReducer(state: IAppState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

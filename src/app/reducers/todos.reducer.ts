import { ITodo } from '../models';
import * as _ from 'lodash';

import * as ListActions from '../actions/list.actions';
import * as TodoActions from '../actions/todo.actions';

function handleEditTodoSuccess(state: ITodo[], action) {
  const newState = _.cloneDeep(state);
  const spliceIndex = newState.findIndex(obj => obj.id === action.payload.id);
  newState.splice(spliceIndex, 1, action.payload);
  return newState;
}

function handlePostTodoSuccess(state: ITodo[], action) {
  const newState = _.cloneDeep(state);
  newState.push(action.payload);
  return newState;
}

export function todosReducer(state: ITodo[], action: ListActions.All | TodoActions.All) {
  switch (action.type) {
    case ListActions.FETCH_TODOS_SUCCESS:
      return action.payload;
    case TodoActions.EDIT_TODO_SUCCESS:
      return handleEditTodoSuccess(state, action);
    case TodoActions.POST_TODO_SUCCESS:
      return handlePostTodoSuccess(state, action);
    default:
      return state;
  }
}

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

function handleDeleteTodoSuccess(state: ITodo[], action: TodoActions.All) {
  const deletedTodo = action.payload;
  const newState = state.filter(todo => todo.id !== deletedTodo.id);
  return newState;
}

function handleUpdateCompleteStatus(state: ITodo[], action: TodoActions.UpdateCompleteStatus) {
  const newState = _.cloneDeep(state);
  const index = newState.findIndex(todo => todo.id === action.payload.id);
  newState[index].complete = action.payload.complete;
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
    case TodoActions.DELETE_TODO_SUCCESS:
      return handleDeleteTodoSuccess(state, action);
    case TodoActions.UPDATE_COMPLETE_STATUS:
      return handleUpdateCompleteStatus(state, action);
    default:
      return state;
  }
}

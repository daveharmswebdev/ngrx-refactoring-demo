import { ITodoList } from './todoList';
import { ITodo } from './todo';

export interface IAppState {
  todoLists: ITodoList[];
  currentTodoList: ITodoList;
  todos: ITodo[];
}

export const INITIAL_STATE: IAppState =  {
  todoLists: undefined,
  currentTodoList: undefined,
  todos: undefined
};

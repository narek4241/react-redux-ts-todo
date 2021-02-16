import { AddTodoAction, DeleteTodoAction } from '../actions/todos';

export enum ActionTypes {
  addTodo,
  deleteTodo,
}

export type Action = AddTodoAction | DeleteTodoAction;

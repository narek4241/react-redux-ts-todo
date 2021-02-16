import { AddTodoAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  addTodo,
  deleteTodo,
}

export type Action = AddTodoAction | DeleteTodoAction;

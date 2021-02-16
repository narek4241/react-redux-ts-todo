import { ActionTypes } from './types';

export interface Todo {
  id: number;
  content: string;
}

export interface AddTodoAction {
  type: ActionTypes.addTodo;
  payload: {
    content: string;
  };
}

export const addTodo = (content: string): AddTodoAction => {
  return {
    type: ActionTypes.addTodo,
    payload: {
      content,
    },
  };
};

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: {
    id: number;
  };
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: {
      id,
    },
  };
};

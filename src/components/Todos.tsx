import React from 'react';
import { Todo, deleteTodo } from '../actions';

export interface Props {
  todos: Todo[];
  deleteTodo: (todoId: number) => void;
}

const Todos = ({ todos, deleteTodo }: Props) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map((todo) => (
          <div
            onClick={() => (todo.id ? deleteTodo(todo.id) : null)}
            key={todo.id}
            className="todo-item collection-item"
          >
            <span>{todo.content}</span>
          </div>
        ))
      ) : (
        <p className="center">No Todos Left</p>
      )}
    </div>
  );
};

export default Todos;

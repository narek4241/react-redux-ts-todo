import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map((todo) => (
          <div
            onClick={() => deleteTodo(todo.id)}
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

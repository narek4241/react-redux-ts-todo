import React from 'react';

const Todos = ({ todos }) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} className="collection-item ">
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

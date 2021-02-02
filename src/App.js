import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'delectus aut autem',
      },
      {
        id: 2,
        content: 'quis ut nam facilis et officia qui',
      },
      {
        id: 3,
        content: 'fugiat veniam minus',
      },
      {
        id: 4,
        content: 'et porro tempora',
      },
      {
        id: 5,
        content: 'laboriosam mollitia et enim',
      },
    ],
  };

  addTodo = (todo) => {
    console.log('todo.content', todo.content);
  };

  deleteTodo = (todoId) => {
    console.log('todoId', todoId);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

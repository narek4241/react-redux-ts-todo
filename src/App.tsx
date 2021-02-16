import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';
import { Todo, addTodo, deleteTodo } from './actions';

export interface Props {
  todos: Todo[];
  addTodo: typeof addTodo;
  deleteTodo: typeof deleteTodo;
}

export interface State {
  todos: Todo[];
}

class App extends Component<Props> {
  addTodo = (todo: Todo) => {
    this.props.addTodo(todo.content);
  };

  deleteTodo = (todoId: number) => {
    this.props.deleteTodo(todoId);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.props.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos,
  };
};

// rm
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (content) => {
//       dispatch(addTodo(content));
//     },
//     deleteTodo: (id) => {
//       dispatch(deleteTodo(id));
//     },
//   };
// };

// rm
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, { addTodo, deleteTodo })(App);

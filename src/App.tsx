import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';
import { Todo, addTodo, deleteTodo } from './actions';
import { Dispatch } from 'redux';

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

// #note done below fully opt -> prev-ly used { addTodo, deleteTodo }, working opt
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTodo: (content: string): any => {
      dispatch(addTodo(content));
    },
    deleteTodo: (id: number): any => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

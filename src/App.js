import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';

class App extends Component {
  addTodo = (todo) => {
    this.props.addTodo(todo.content);
  };

  deleteTodo = (todoId) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => {
      dispatch({ type: 'ADD_TODO', payload: { content } });
    },
    deleteTodo: (id) => {
      dispatch({ type: 'DELETE_TODO', payload: { id } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

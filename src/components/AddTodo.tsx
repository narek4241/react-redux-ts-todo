import React, { Component } from 'react';
import { Todo } from '../actions';

export interface Props {
  addTodo: (todo: Todo) => void;
}

export interface State {
  todo: Todo;
}

class AddTodo extends Component<Props, State> {
  state = {
    todo: {
      content: '',
    },
  };

  // #task avoid using any opt2
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: {
        content: '',
      },
    });
  };

  handleChange = (e: any) => {
    this.setState({
      todo: {
        content: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todo.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;

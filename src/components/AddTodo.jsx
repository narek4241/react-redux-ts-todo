import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    todo: {
      content: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: {
        content: '',
      },
    });
  };

  handleChange = (e) => {
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

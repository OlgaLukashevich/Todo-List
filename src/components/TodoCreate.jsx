import React, { Component } from 'react';
import './TodoCreate.css';
class TodoCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleSetName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.name.trim()) {
      alert('todo cannot be empty');
      return;
    }
    this.props.onAdd(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div id="input">
        <input
          id="inputTodo"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="add todo here"
          onChange={this.handleSetName}
        />
        <button id="addButton" onClick={this.handleAddTodo}>
          Add
        </button>
      </div>
    );
  }
}
export default TodoCreate;

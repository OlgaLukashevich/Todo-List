import './Todo.css';
import React from 'react';
class Todo extends React.Component {
  render() {
    const { done, name } = this.props;
    return (
      <div id="todo" className={done ? 'done' : ''}>
        <input
          id="checkbox"
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
        />
        <span>{name}</span>
        <button id="deleteButton" onClick={this.handleRemovingOfTodo}>
          DELETE
        </button>
      </div>
    );
  }
  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.todoid);
  };
  handleRemovingOfTodo = () => {
    this.props.handleRemovingOfTodo(this.props.todoid);
  };
}
export default Todo;

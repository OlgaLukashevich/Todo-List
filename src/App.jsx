import './App.css';
import React from 'react';
import Todo from './components/Todo';
import TodoInfo from './components/TodoInfo';
import TodoCreate from './components/TodoCreate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      todos: [
        {
          name: 'hand over todolist',
          done: true,
        },
      ],
    };
  }
  handleSetDone = (newDone, todoid) => {
    const newTodos = this.state.todos.map((todo, id) =>
      id === todoid
        ? {
            name: todo.name,
            done: newDone,
          }
        : todo
    );
    this.setState({
      todos: newTodos,
    });
  };

  handleRemovingOfTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== id),
    });
  };
  handleAdd = (name) => {
    const todo = {
      name,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  render() {
    const { todos } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const allCount = todos.length;
    return (
      <div>
        <span id="nameOfApp">To do</span>
        <TodoInfo allCount={allCount} doneCount={doneCount} />
        <TodoCreate onAdd={this.handleAdd} />
        {todos.map((todo, id) => (
          <div id="todoList">
            <Todo
              name={todo.name}
              todoid={id}
              done={todo.done}
              onDone={this.handleSetDone}
              handleRemovingOfTodo={this.handleRemovingOfTodo}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;

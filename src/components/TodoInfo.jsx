import './TodoInfo.css';
import React from 'react';
class TodoInfo extends React.Component {
  render() {
    const { allCount, doneCount } = this.props;
    return (
      <div id="info">
        <p> All: {allCount}</p>
        <p> Done: {doneCount}</p>
        <p> Left: {allCount - doneCount}</p>
      </div>
    );
  }
}
export default TodoInfo;

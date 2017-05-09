import React from 'react';

// class TodoListItem extends React.Component{
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  render() {
    return (
      <li>
        {this.props.todo.title}
      <button className="delete-button" onClick={ this.handleDelete }>Delete</button>
      <button className="update-button" onClick={ this.handleDone }>Done</button>
      </li>);
  }

  handleDone(e) {
    // debugger
    e.preventDefault();
    this.props.todo.done = !this.props.todo.done;

  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this);
  }
}

// const TodoListItem = ({ todo }) => {
//   return (
//     <li>
//       {todo.title}
//       <button className="delete-button">Delete</button>
//     </li>);
// };

export default TodoListItem;

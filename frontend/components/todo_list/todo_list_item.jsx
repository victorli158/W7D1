import React from 'react';
import TodoDetailViewContainer from './todo_detail_container';

// class TodoListItem extends React.Component{
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  render() {
    const { todo, updateTodo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={ todo } />;
    }
    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <button
            className={ done ? "done" : "undone" }
            onClick={ this.toggleTodo }>
            { done ? "Undo" : "Done" }
          </button>
        </div>
        { detail }
      </li>
    );
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

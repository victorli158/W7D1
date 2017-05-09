import React from 'react';
// import TodoList from './todo_list';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <p className="todo-body">{ todo.body }</p>
        <button
          className="delete-button"
          onClick={ removeTodo }>Delete Todo</button>
      </div>
    );
  }





// <removeTodo={() => {this.props.removeTodo(todo);}}/>

}

export default TodoDetailView;

import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    // debugger
    const todoItems = todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id}/>
    ));
    return(
      <div>
        <ul className="todo list">
          {todoItems}
        </ul>
      </div>
    );
  }


}
export default TodoList;

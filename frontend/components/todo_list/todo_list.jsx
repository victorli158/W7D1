import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo } = this.props;
    // debugger
    const todoItems = todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id} removeTodo={() => {this.props.removeTodo(todo);}}/>
    ));
    return(
      <div>
        <ul className="todo list">
          {todoItems}
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }


}
export default TodoList;

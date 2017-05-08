import React from 'react';

// class TodoListItem extends React.Component{
const TodoListItem = ({ todo }) => {
  return <li>{todo.title}</li>;
};

export default TodoListItem;

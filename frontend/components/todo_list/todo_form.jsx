import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  handleUpdate(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.handleUpdate('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            value={this.state.body}
            onChange={this.handleUpdate('body')}
            required></textarea>
        </label>
        <button className="create-button">Submit</button>
      </form>
    );
  }
}

export default TodoForm;

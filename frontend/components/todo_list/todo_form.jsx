import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            value={this.state.body}
            required></textarea>
        </label>
        <button className="create-button">Submit</button>
      </form>
    );
  }
}

export default TodoForm;

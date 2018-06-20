import React, { PureComponent } from "react";

/**
 * Renders a todo.
 *
 * @prop todo a todo
 */
class Todo extends PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          // We return a function that creates a function for the very input control
          onChange={() => {
            this.props.handleCheckTodo(this.props.todo.id);
          }}
          checked={this.props.todo.done}
        />
        <span
          style={{
            textDecoration: this.props.todo.done ? "line-through" : "none"
          }}
        >
        {this.props.todo.descr}
        </span>
      </li>
    );
  }
}

export default Todo;

import React, { Component } from "react";
import Todo from "../todo/Todo";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <Todo
              todo={todo}
              handleCheckTodo={this.props.handleCheckTodo}
              key={todo.id.toString()}
            />
          ))}
        </ul>
        <Link to="/add">
          <Button variant="contained" color="primary" type="Submit">
            +
          </Button>
        </Link>
      </div>
    );
  }
}

export default TodoList;

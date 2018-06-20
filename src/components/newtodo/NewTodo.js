import React, { PureComponent } from "react";
import { Button, TextField } from "@material-ui/core";
import { Redirect } from "react-router";

class NewTodo extends PureComponent {
  constructor() {
    super();
    this.state = {
      nextTodoDescr: "",
      submitted: false
    };
  }

  onSubmitNewTodo = event => {
    // Prevent reload of browser - ie. prevent default behavior
    // Why? State is not persisted -> would be vanished
    event.preventDefault();

    this.cleanUpState_NewTodoDescription();

    this.props.onSubmitNewTodo(this.state.nextTodoDescr);

    this.setState({ submitted: true });
  };

  handleClear = event => {
    // Don't submit form (i.e. don't do defautl behavior)
    event.preventDefault();

    this.cleanUpState_NewTodoDescription();
  };

  cleanUpState_NewTodoDescription() {
    this.setState({ nextTodoDescr: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitNewTodo}>
          <TextField
            type="normal"
            value={this.state.nextTodoDescr}
            onChange={event => {
              let nextDescr = event.target.value;
              this.setState({ nextTodoDescr: nextDescr });
            }}
          />
          <Button variant="contained" color="primary" type="Submit">
            +
          </Button>
          <Button
            variant="contained"
            color="default"
            type="Submit"
            onClick={this.handleClear}
          >
            Clear
          </Button>
        </form>
        <div>{this.state.submitted ? <Redirect to="/"/> : ""}</div>
      </div>
    );
  }
}

export default NewTodo;

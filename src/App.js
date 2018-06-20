import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todolist/TodoList";
import NewTodo from "./components/newtodo/NewTodo";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          descr: "get groceries",
          id: 0,
          done: false
        },
        {
          descr: "do stuff",
          id: 1,
          done: true
        }
      ],
      maxCurrentID: 1
    };
  }

  onSubmitNewTodo = newTodoDescription => {
    this.setState(oldState => {
      let nextTodo = {
        descr: newTodoDescription,
        id: this.state.maxCurrentID + 1,
        done: false
      };

      return {
        todos: [...oldState.todos, nextTodo],
        maxCurrentID: oldState.maxCurrentID + 1
      };
    });
  };

  handleCheckTodo = todoID => {
    this.setState(oldState => {
      let newTodos = oldState.todos.map(oldTodo => {
        if (oldTodo.id === todoID) {
          return {
            id: oldTodo.id,
            descr: oldTodo.descr,
            done: !oldTodo.done
          };
        } else {
          return oldTodo;
        }
      });
      return { todos: newTodos };
    });
  };

  render() {
    return (
      <div className="App">
        <Typography variant="display2">Todos</Typography>
        <Route
          path="/"
          exact
          render={() => (
            <TodoList
              todos={this.state.todos}
              handleCheckTodo={this.handleCheckTodo}
            />
          )}
        />
        <Route
          path="/add"
          render={() => <NewTodo onSubmitNewTodo={this.onSubmitNewTodo} />}
        />
      </div>
    );
  }
}

export default App;

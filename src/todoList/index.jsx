import React, { Component } from "react";
import Todo from "./component/Todo";

const todos = [];

export class Todolist extends Component {
  render() {
    return (
      <div>
        {todos.map(() => (
          <Todo />
        ))}
      </div>
    );
  }
}

export default Todolist;

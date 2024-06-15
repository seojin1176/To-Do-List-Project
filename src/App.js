import { Component } from "react";
import Todolist from "./Todolist";
import Todo from "./Todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="wrap">
          <h1 style={{ textAlign: "center" }}>To Do List!</h1>
          <Todo />
          <Todolist />
        </div>
      </main>
    );
  }
}

export default App;

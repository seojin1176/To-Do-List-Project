import { Component } from "react";
import Todolist from "./Todolist";
import Todo from "./Todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="main-container">
        <Todo />
        <Todolist />
      </main>
    );
  }
}

export default App;

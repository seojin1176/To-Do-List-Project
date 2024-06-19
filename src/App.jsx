import { Component } from "react";
import Todolist from "./todoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="wrap">
          <h1 style={{ textAlign: "center" }}>To Do List!</h1>
          <Todolist />
        </div>
      </main>
    );
  }
}

export default App;

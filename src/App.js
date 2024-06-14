import { Component } from "react";
import Todolist from "./Todolist";

class App extends Component {
  render() {
    return (
      <main className="main-container">
        <div
          className="main-box"
          style={{
            width: "85%",
            border: "1px solid",
            backgroundColor: "pink",
            margin: "auto",
          }}
        >
          <div className="checkbox"></div>
          <h1>안녕하세요</h1>
        </div>
        <Todolist />
      </main>
    );
  }
}

export default App;

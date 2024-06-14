import React, { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div>
        <div
          className="main-box"
          style={{
            width: "85%",
            backgroundColor: "pink",
            margin: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="checkbox"
            style={{
              height: "30px",
              width: "35px",
              border: "solid 1px",
              display: "block",
              textAlign: "center",
              marginLeft: "20px",
              backgroundColor: "white",
            }}
          >
            ✓
          </div>
          <div className="todo" style={{ width: "85%", padding: "20px" }}>
            <input
              style={{
                width: "100%",
                height: "30px",
                backgroundColor: "transparent",
              }}
              className="todoValue"
              placeholder="할 일을 작성해주세요."
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;

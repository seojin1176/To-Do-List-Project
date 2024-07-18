import React, { useState } from "react";

function Todo() {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <div className="todo-wrap">
      <div className="add-todolist-wrap">
        <button className="add-todolist">할 일 추가</button>
      </div>

      <div className="main-box">
        <button
          onClick={onClick}
          style={{
            marginLeft: "10px",
            border: "none",
            width: "35px",
            height: "30px",
          }}
          className={`${
            isClicked ? "background-light-green" : "background-white"
          }`}
        >
          ✓
        </button>

        <div className="todo" style={{ width: "85%", padding: "20px" }}>
          <input
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "transparent",
              border: "none",
            }}
            className="todoValue"
            placeholder="할 일을 작성해주세요."
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Todo;

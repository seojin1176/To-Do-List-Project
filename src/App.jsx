//App.jsx
import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "./atoms";
import TodoModal from "./TodoModal";

import "../src/App.css";

function App() {
  const [todoModalVisible, setTodoModalVisible] = useRecoilState(modalState);
  // modal의 상태 확인, 모달이 열렸는지 안열렸는지 확인하는 것

  //modal open 버튼 눌렀을 때
  const openModal = () => {
    setTodoModalVisible(true);
  };

  //닫기 버튼 눌렀을 때
  const closeModal = () => {
    setTodoModalVisible(false);
  };

  return (
    <div>
      <h1 className="title">To Do List!</h1>

      <div className="Button-wrap">
        <button onClick={openModal} className="openButton">
          할 일 추가
        </button>
      </div>

      <TodoModal isOpen={todoModalVisible} closeModal={closeModal} />
    </div>
  );
}

export default App;

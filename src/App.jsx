//App.jsx
import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "./atoms";
import TodoModal from "./TodoModal";

import "../src/App.css";

function App() {
  const [modalvisible, setmodalvisible] = useRecoilState(modalState);

  //modal open 버튼 눌렀을 때
  const openModal = () => {
    setmodalvisible(true);
  };

  //닫기 버튼 눌렀을 때
  const closeModal = () => {
    setmodalvisible(false);
  };

  return (
    <div>
      <h1 className="title">To Do List!</h1>

      <div className="Button-wrap">
        <button onClick={openModal} className="openButton">
          할 일 추가
        </button>
      </div>

      <TodoModal isOpen={modalvisible} closeModal={closeModal} />
    </div>
  );
}

export default App;

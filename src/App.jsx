//App.jsx
import React from "react";
import "../src/App.css";
import { useRecoilState } from "recoil";
import { modalState } from "./atoms";
import MModal from "./MModal";

function App() {
  const [modal, setModal] = useRecoilState(modalState);

  //modal open 버튼 눌렀을 때
  const openModal = () => {
    setModal(true);
  };

  //닫기 버튼 눌렀을 때
  const closModal = () => {
    setModal(false);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <h1 className="title">To Do List!</h1>

      <div className="Button-wrap">
        <button onClick={openModal} className="openButton">
          할 일 추가
        </button>
      </div>
      <MModal isOpen={modal} closmodal={closModal} closeModal={closeModal} />
    </div>
  );
}

export default App;

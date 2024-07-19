//MModal.js
import React from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

import { inputValuesState, comentValuesState } from "./atoms";

import "./App.css";

function TodoModal({ isOpen, closeModal }) {
  const [TodoTitle, setTodoTitle] = useRecoilState(inputValuesState);
  const [comentValue, setComentValue] = useRecoilState(comentValuesState);

  const changeInput = (e) => {
    const newState = {
      id: Date.now(),
      value: e.target.value,
      check: false,
    };
    setTodoTitle(newState);
  };

  const comentInput = (e) => {
    const newState = {
      value: e.target.value,
    };
    setComentValue(newState);
  };

  const addTodo = () => {
    const modalInput = document.querySelector(".modalInput");
    if (modalInput.value === "") {
      alert("값을 입력해주세요");
      return;
    }
    closeModal();
  };

  const closeInputVlaue = () => {
    closeModal();
    setTodoTitle("");
  };

  const modalContent = (
    <div>
      <h2 className="modal-title">제목 입력</h2>
      <div className="input-button-wrap">
        <input
          className="modalInput"
          required
          placeholder="입력"
          type="text"
          value={TodoTitle.value}
          onChange={changeInput}
        ></input>
        <h4>설명</h4>
        <input
          className="modalInput"
          required
          placeholder="입력"
          type="text"
          value={comentValue.value}
          onChange={comentInput}
        ></input>
        <button onClick={addTodo} className="reqButton">
          추가
        </button>
        <button onClick={closeInputVlaue} className="reqButton">
          닫기
        </button>
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onRequestClose={addTodo} contentLabel="Exaple modal">
      {modalContent}
    </Modal>
  );
}

export default TodoModal;

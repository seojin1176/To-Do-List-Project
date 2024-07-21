//MModal.js
import React from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { inputValuesState, comentValuesState } from "./atoms";
import "./App.css";

function MModal({ isOpen, closeModal, closmodal }) {
  const [inputValue, setinputvalue] = useRecoilState(inputValuesState);
  const [comentValue, setcomentValue] = useRecoilState(comentValuesState);

  const changeInput = (e) => {
    const newState = {
      id: Date.now(),
      value: e.target.value,
      check: false,
    };
    setinputvalue(newState);
  };

  const comentInput = (e) => {
    const newState = {
      value: e.target.value,
    };
    setcomentValue(newState);
  };

  const handleinputvlaue = () => {
    const modalInput = document.querySelector(".modalInput");
    if (modalInput.value === "") {
      alert("값을 입력해주세요");
    } else {
      closeModal();
    }
  };

  const closeinputvlaue = () => {
    closmodal();
    setinputvalue("");
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
          value={inputValue.value}
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
        <button onClick={handleinputvlaue} className="reqButton">
          추가
        </button>
        <button onClick={closeinputvlaue} className="reqButton">
          닫기
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleinputvlaue}
      contentLabel="Exaple modal"
    >
      {modalContent}
    </Modal>
  );
}

export default MModal;

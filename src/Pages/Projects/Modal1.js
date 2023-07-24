import React from "react";
import "./Modal.css";
import calcPic from '../Assets/CalculatorPic.png'

function Modal1({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Calculator App (JS, CSS, HTML)</h1>
        </div>
        <div className="body">
          <img className="Modal1Picture" src={calcPic} alt="" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <a href="/CalculatorApp.zip"><button>Download</button></a>
        </div>
      </div>
    </div>
  );
}

export default Modal1;
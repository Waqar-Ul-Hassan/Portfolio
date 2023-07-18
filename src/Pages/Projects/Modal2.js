import React from "react";
import "./Modal2.css";
import CalculatorAppFile from '../Assets/pPic.png'
import ticTacToePic from '../Assets/Modal2Back.png'

function Modal2({ setOpenModal2 }) {
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title2">
          <h1>Tic Tac Toe (Java)</h1>
        </div>
        <div className="body2">
          <img className="Modal2Picture" src={ticTacToePic} alt="" />
        </div>
        <div className="footer2">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}
            id="cancelBtn2"
          >
            Cancel
          </button>
          <a href="/TicTacToe.zip"><button>Download</button></a>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
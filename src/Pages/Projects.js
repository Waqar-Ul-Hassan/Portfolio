import Modal1 from "./Projects/Modal1";
import Modal2 from "./Projects/Modal2";
import {useState} from 'react'
import "./Projects/Modal.css";
import "./Projects/Modal2.css";
import CalculatorPic from './Assets/CalculatorPic.png'
import Main from "../Background/HomeBack"
import Modal2Back from "./Assets/Modal2Back.png"

export default function Projects() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    return (
        <>
        <Main />
    <div class="grid-container">
        <div class="Modal1">
            <img className="Modal1Back" src={CalculatorPic} alt="" />
            <button
        className="openModalBtn1"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal1 setOpenModal={setModalOpen} />}
        </div>
        
        <div class="Modal2">
            <img className="Modal2Back" src={Modal2Back} alt="" />
            <button
        className="openModalBtn2"
        onClick={() => {
          setModalOpen2(true);
        }}
      >
        Open
      </button>

      {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />}
        </div>
        <div class="Modal3"></div>
        <div class="Modal4"></div>
    </div>

        </>
    );
    
}
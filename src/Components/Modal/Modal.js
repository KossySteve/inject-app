import React, { useState } from "react";
import "./Modal.scss";

function Modal({closeModal, content}) {
 // const [closeModal, setCloseModal] = useState(false);
  return (
   // closeModal || (
      <div className="modal">
        <div className="modal-content">
          <button onClick={closeModal} className="close-button">
            X
          </button>

          {content}
        </div>
      </div>
  //  )
  );
}

export default Modal;

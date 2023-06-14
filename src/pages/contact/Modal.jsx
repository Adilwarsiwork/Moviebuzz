import React from "react";
import { useNavigate } from "react-router-dom";

import "./modal.scss";

const Modal = ({ setShowmodal }) => {
  const Navigate = useNavigate();
  return (
    <div className="modal-container">
      <div className="modalbox">
        <h5 className="message">
          Thankyou! Your response has been recorded, I will get back to you
          soon.
        </h5>
        <div className="button-box">
          <button
            onClick={() => {
              Navigate("/");
            }}
            className="gotohome"
          >
            Go to Home Page
          </button>

          <button
            className="stayhere"
            onClick={() => {
              Navigate("/contact");
              setShowmodal(false);
            }}
          >
            Stay Here{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

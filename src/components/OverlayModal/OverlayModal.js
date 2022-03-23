import React from "react";
import "./OverlayModal.scss";

const OverlayModal = ({ activate, component }) => {
  return (
    <div className="overlay-active">
      <div className="overlay-container">
        <div className="overlay-box">
          <span onClick={() => activate(false)}>X</span>
        </div>
        {component}
      </div>
    </div>
  );
};

export default OverlayModal;

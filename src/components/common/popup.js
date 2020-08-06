import React from "react";
import "./popup.scss";

function Popup({ shown, onPopupClose }) {
  return (
    <div className={`back-blackout ${shown ? "" : "hidden"}`}>
      <div className={`popup ${shown ? "" : "hidden"}`} onClick={onPopupClose}>
        <p><strong>Pop up</strong></p>
        <p>Slide in from right, Right align with the screen.</p>
        <p>Hight same with the screen, width = 280px.</p>
        <br />
        <p>The rest ill with transparent=50% Black background</p>
      </div>
    </div>
  );
}

export default Popup;

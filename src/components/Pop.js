import React from "react";
import './pop.css'

function Pop({ handlePopUp }) {
  return (
    <div className="pop-container">
        <h1 onClick={handlePopUp} className="close">
          X
        </h1>

      <div className="pop">
        <h2>i am a popup</h2>
        <div className="test">
          <img src="./img/fifteen.svg" alt="" />
<p> this is the image title</p>
          </div>

        </div>
      </div>
    
  );
}

export default Pop;

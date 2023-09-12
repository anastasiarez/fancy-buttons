import React, { useReducer, useState } from "react";

function AngryButton() {

  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
      return anger + action;
    } else {
      return 0;
    }
  }, 0);


  return (
    <button onClick={() => dispatch(0.1)} style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">

      {/* If you have NOT reached the maximum */}
      {anger < 1 && <span>Don't click me too much! </span>}

      {/* If you HAVE reached the maximum */}
      {anger > 1 && <span>Damn you!!!</span>}
    </button>
  );
}

export default AngryButton;
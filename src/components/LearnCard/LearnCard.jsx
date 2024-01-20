// import { useEffect, useState } from "react";
// import ReactCardFlip from "react-card-flip";
import "./LearnCard.scss";

function LearnCard(props) {
  return (
    <div key={props.array[props.numberCard].id} className="learnCard-container">
      <h3 className="main">{props.array[props.numberCard].english}</h3>
      <span>{props.array[props.numberCard].transcription}</span>

      {props.checked ? (
        <>
          <span className="translation-word">
            {props.array[props.numberCard].russian}
          </span>
        </>
      ) : (
        <button className="buttonSave" onClick={props.onClick}>
          check
        </button>
      )}
    </div>
  );
}
export default LearnCard;

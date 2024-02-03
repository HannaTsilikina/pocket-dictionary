import { forwardRef } from "react";
import "./LearnCard.scss";

let LearnCard = forwardRef((props, ref) => {
  return (
    <div key={props.card.id} className="learncard-container">
      <h3 className="main">{props.card.english}</h3>
      <span>{props.card.transcription}</span>
      {props.checked ? (
        <>
          <span className="translation-word">{props.card.russian}</span>
        </>
      ) : (
        <button className="button-save" ref={ref} onClick={props.onClick}>
          {"check "}
        </button>
      )}
    </div>
  );
});

export default LearnCard;

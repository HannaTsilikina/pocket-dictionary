import { forwardRef } from "react";
import "./LearnCard.scss";

let LearnCard = forwardRef((props, ref) => {
  let learnedArray = props.learned;
  return (
    <div key={props.card.id} className="learncard-container">
      <h3 className="main">{props.card.english}</h3>
      <span className="main">{props.card.transcription}</span>
      {learnedArray && learnedArray.includes(props.card.id) ? (
        <>
          <span className="translation-word">{props.card.russian}</span>
        </>
      ) : props.checked ? (
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

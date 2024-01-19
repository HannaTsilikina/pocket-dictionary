import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./LearnCard.scss";

function LearnCard(props) {
  const [checked, setChecked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChecked = () => {
    setIsFlipped(!isFlipped);
    setChecked(!checked);
  };
  useEffect(() => setChecked(false), [props.numberCard]);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedFrontToBack={0.4}
      flipDirection="horizontal"
    >
      <div
        key={props.array[props.numberCard].id}
        className="learnCard-container"
      >
        <h3 className="main">{props.array[props.numberCard].english}</h3>
        <span>{props.array[props.numberCard].transcription}</span>

        {checked ? (
          <>
            <span className="translation-word">
              {props.array[props.numberCard].russian}
            </span>
            {/* <button className="button-secondary" onClick={handleChecked}>
            hover
          </button> */}
          </>
        ) : (
          <button className="buttonSave" onClick={handleChecked}>
            check
          </button>
        )}
      </div>
      <div
        key={props.array[props.numberCard].id}
        className="learnCard-container"
      >
        <h3 className="main">{props.array[props.numberCard].english}</h3>
        <span>{props.array[props.numberCard].transcription}</span>

        {checked ? (
          <>
            <span className="translation-word">
              {props.array[props.numberCard].russian}
            </span>
            {/* <button className="button-secondary" onClick={handleChecked}>
            hover
          </button> */}
          </>
        ) : (
          <button className="buttonSave" onClick={handleChecked}>
            check
          </button>
        )}
      </div>
    </ReactCardFlip>
  );
}
export default LearnCard;

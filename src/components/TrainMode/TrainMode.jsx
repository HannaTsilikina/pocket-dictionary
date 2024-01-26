import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./TrainMode.scss";
import LearnCard from "../LearnCard/LearnCard";

import "../../assets/images/right-arrow.png";
import listOfWords from "../../store/store";

export default function TrainMode(props) {
  const [isFlipped, setFlipped] = useState(false);
  const [number, setNumber] = useState(props.number);
  const handleChangeNumber = () => {
    setFlipped(false);
    if (number >= props.array.length - 1) setNumber(props.number);
    else setNumber(number + 1);
  };
  const handleChangeNumberPrev = () => {
    setFlipped(false);
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleChangeFlipped = () => {
    setFlipped(!isFlipped);
  };
  return (
    <>
      <div className="trainMode-container">
        <button className="button-secondary" onClick={handleChangeNumberPrev}>
          <img
            className="train-arr"
            src={require("../../assets/images/left-arrow.png")}
            alt="arrow"
          />
        </button>
        <div className="react-card-flip">
          <ReactCardFlip
            isFlipped={isFlipped}
            flipSpeedFrontToBack={0.4}
            flipDirection="horizontal"
          >
            <LearnCard
              card={listOfWords[number]}
              onClick={handleChangeFlipped}
            />
            <LearnCard card={listOfWords[number]} checked={true} />
          </ReactCardFlip>
        </div>
        <button className="button-secondary" onClick={handleChangeNumber}>
          <img
            className="train-arr"
            src={require("../../assets/images/right-arrow.png")}
            alt="arrow"
          />
        </button>
      </div>

      <span className="TrainMode-counter">
        {number + 1}/{props.array.length}
      </span>
    </>
  );
}

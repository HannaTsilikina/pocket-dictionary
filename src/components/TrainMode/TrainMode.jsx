import { useState, useEffect } from "react";
import "./TrainMode.scss";
import LearnCard from "../LearnCard/LearnCard";
import listOfWords from "../../store/store";
import "../../assets/images/right-arrow.png";

export default function TrainMode(props) {
  const [number, setNumber] = useState(props.number);
  const handleChangeNumber = () => {
    if (number >= props.array.length - 1) setNumber(props.number);
    else setNumber(number + 1);
  };
  const handleChangeNumberPrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  useEffect(() => console.log(`Нажато ${number} раз`));

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

        <LearnCard array={listOfWords} numberCard={number} />
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

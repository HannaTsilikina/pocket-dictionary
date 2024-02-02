import { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./TrainMode.scss";
import LearnCard from "../LearnCard/LearnCard";
import "../../assets/images/right-arrow.png";
import listOfWords from "../../store/store";
import arrowRight from "../../assets/images/right-arrow.png";
import arrowLeft from "../../assets/images/left-arrow.png";

export default function TrainMode(props) {
  const [isFlipped, setFlipped] = useState(false);
  const [number, setNumber] = useState(props.number);
  const [learned, setLearned] = useState(props.learned);
  const [countOfLearnedWords, setCountOfLearnedWords] = useState(0);
  const [training, setTraining] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current, countOfLearnedWords);
      ref.current.focus();
    }
  }, [number]);

  const handleChangeNumber = () => {
    setFlipped(false);
    if (number >= props.array.length - 1) {
      setNumber(props.number);
      setTraining(true);
    } else setNumber(number + 1);
  };
  const handleChangeNumberPrev = () => {
    setFlipped(false);
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleChangeFlipped = () => {
    setFlipped(!isFlipped);

    setLearned(true);
    if (countOfLearnedWords < 12) {
      setCountOfLearnedWords(countOfLearnedWords + 1);
    }
  };
  return training ? (
    <main className="trainmode-main">
      <h2 className="text-finish">
        The training is over. <br /> Your result : {countOfLearnedWords} learned
        words
      </h2>
      <a href="/">
        <button className="button-save">{"Back to dictionary"}</button>
      </a>
    </main>
  ) : (
    <main className="trainmode-main">
      <h1>Training</h1>
      <div className="trainmode-container">
        <>
          <button className="button-secondary" onClick={handleChangeNumberPrev}>
            <img className="train-arr" src={arrowLeft} alt="arrow" />
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
                learned={learned}
                ref={ref}
              />
              <LearnCard card={listOfWords[number]} checked={true} />
            </ReactCardFlip>
          </div>
          <button className="button-secondary" onClick={handleChangeNumber}>
            <img className="train-arr" src={arrowRight} alt="arrow" />
          </button>
        </>
      </div>

      <span className="trainMode-counter">
        {number + 1}/{props.array.length}
      </span>
      <span className="learned-words-count">
        Learned {countOfLearnedWords} words
      </span>
    </main>
  );
}

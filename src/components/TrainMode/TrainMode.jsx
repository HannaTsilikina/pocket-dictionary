import { useEffect, useRef, useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import "./TrainMode.scss";
import LearnCard from "../LearnCard/LearnCard";
import arrowRight from "assets/images/right-arrow.png";
import arrowLeft from "assets/images/left-arrow.png";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

const TrainMode = inject(["store"])(
  observer(({ store }) => {
    const [isFlipped, setFlipped] = useState(false);
    const [number, setNumber] = useState(0);
    const [learnedWords, setLearnedWords] = useState([]);
    const [countOfLearnedWords, setCountOfLearnedWords] = useState(0);
    const [training, setTraining] = useState(false);

    const ref = useRef();
    useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, [number]);

    const handleChangeNumber = () => {
      setFlipped(false);
      if (number >= store.listOfWords.length - 1) {
        setNumber(number);
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
      setLearnedWords([store.listOfWords[number].id, ...learnedWords]);
      if (countOfLearnedWords < store.listOfWords.length) {
        setCountOfLearnedWords(countOfLearnedWords + 1);
      }
    };
    return training ? (
      <main className="trainmode-main">
        <h2 className="text-finish">
          The training is over. <br /> Your result : {countOfLearnedWords}{" "}
          learned words
        </h2>
        <NavLink className="header-hrefs" to="/main/dictionary">
          <button className="button-save">{"Back to dictionary"}</button>
        </NavLink>
      </main>
    ) : (
      <main className="trainmode-main">
        <h1>Training</h1>
        <div className="trainmode-container">
          <>
            <button
              className="button-secondary"
              onClick={handleChangeNumberPrev}
            >
              <img className="train-arr" src={arrowLeft} alt="arrow" />
            </button>

            <div className="react-card-flip">
              <ReactCardFlip
                isFlipped={isFlipped}
                flipSpeedFrontToBack={0.4}
                flipDirection="horizontal"
              >
                <LearnCard
                  card={store.listOfWords[number]}
                  onClick={handleChangeFlipped}
                  learned={learnedWords}
                  ref={ref}
                />
                <LearnCard card={store.listOfWords[number]} checked={true} />
              </ReactCardFlip>
            </div>
            <button className="button-secondary" onClick={handleChangeNumber}>
              <img className="train-arr" src={arrowRight} alt="arrow" />
            </button>
          </>
        </div>

        <span className="trainMode-counter">
          Words {number + 1}/{store.listOfWords.length}
        </span>
        <span className="learned-words-count">
          Learned {countOfLearnedWords} words
        </span>
      </main>
    );
  })
);
export default TrainMode;

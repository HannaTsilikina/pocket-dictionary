import { useState } from "react";
import "./LearnCard.scss";

function LearnCard(props) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="learnCard-container">
      <h3 className="main">{props.english}</h3>
      <span>{props.transcription}</span>

      {checked ? (
        <span className="translation-word">{props.russian}</span>
      ) : (
        <button className="buttonSave" onClick={handleChecked}>
          check
        </button>
      )}
    </div>
  );
}
export default LearnCard;

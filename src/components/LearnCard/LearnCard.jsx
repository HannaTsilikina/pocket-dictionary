import { useEffect, useState } from "react";
import "./LearnCard.scss";
function LearnCard(props) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  useEffect(() => setChecked(false), [props.numberCard]);
  return (
    <div key={props.array[props.numberCard].id} className="learnCard-container">
      <h3 className="main">{props.array[props.numberCard].english}</h3>
      <span>{props.array[props.numberCard].transcription}</span>

      {checked ? (
        <span className="translation-word">
          {props.array[props.numberCard].russian}
        </span>
      ) : (
        <button className="buttonSave" onClick={handleChecked}>
          check
        </button>
      )}
    </div>
  );
}
export default LearnCard;

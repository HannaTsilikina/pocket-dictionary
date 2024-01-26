import "./LearnCard.scss";

function LearnCard(props) {
  return (
    <div key={props.card.id} className="learnCard-container">
      <h3 className="main">{props.card.english}</h3>
      <span>{props.card.transcription}</span>
      {props.card.checked ? (
        <>
          <span className="translation-word">{props.card.russian}</span>
        </>
      ) : (
        <button className="buttonSave" onClick={props.onClick}>
          {"check "}
        </button>
      )}
    </div>
  );
}
export default LearnCard;

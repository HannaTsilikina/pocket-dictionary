function Card(props) {
  if (!props.main)
    return (
      <div className="card-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h4> {props.topic}</h4>
      </div>
    );
  else
    return (
      <div className="card-main-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h3> Категория: {props.topic}</h3>
      </div>
    );
}
export default Card;

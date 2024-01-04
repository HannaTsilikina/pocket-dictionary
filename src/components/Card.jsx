function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.name}</h2>
      <h3>{props.transcription}</h3>
      <h3> {props.translation}</h3>
      <h4> Категория: {props.topic}</h4>
    </div>
  );
}
export default Card;

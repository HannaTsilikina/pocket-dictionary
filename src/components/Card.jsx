function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.name}</h2>
      <h3>Транскрипция: {props.transcription}</h3>
      <h3>Перевод: {props.translation}</h3>
      <h4> Тема: {props.topic}</h4>
    </div>
  );
}
export default Card;

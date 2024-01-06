import ButtonChange from "./Buttons/ButtonChange";
import ButtonDelete from "./Buttons/ButtonDelete";
import ButtonSave from "./Buttons/ButtonSave";
function Card(props) {
  if (props.new)
    return (
      <div className="card-container">
        <input className="addedWord" placeholder={props.name}></input>
        <input className="addedWord" placeholder={props.transcription}></input>
        <input className="addedWord" placeholder={props.translation}></input>
        <input className="addedWord" placeholder={props.topic}></input>
        <div className="buttons-container">
          <ButtonSave />
          <ButtonDelete />
        </div>
      </div>
    );
  if (!props.main)
    return (
      <div className="card-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h4> {props.topic}</h4>
        <div className="buttons-container">
          <ButtonChange />
          <ButtonDelete />
        </div>
      </div>
    );
  if (props.main)
    return (
      <div className="card-main-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h3> Категория: {props.topic}</h3>
        <div className="buttons-container"></div>
      </div>
    );
}
export default Card;

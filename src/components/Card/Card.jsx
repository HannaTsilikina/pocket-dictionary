import Button from "../AppUI/Buttons/Button";
function Card(props) {
  if (!props.new && props.main)
    return (
      <div className="card-main-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h3>{props.topic}</h3>
        <div className="buttons-container"></div>
      </div>
    );
  if (props.new)
    return (
      <div className="card-container">
        <input className="addedWord" placeholder={props.name}></input>
        <input className="addedWord" placeholder={props.transcription}></input>
        <input className="addedWord" placeholder={props.translation}></input>
        <input className="addedWord" placeholder={props.topic}></input>
        <div className="buttons-container">
          <Button class="buttonSave" text="Save" />
          <Button class="buttonDelete" text="Delete" />
        </div>
      </div>
    );
  if (!props.new)
    return (
      <div className="card-container">
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h4> {props.topic}</h4>
        <div className="buttons-container">
          <Button class="buttonChange" text="Change" />
          <Button class="buttonDelete" text="Delete" />
        </div>
      </div>
    );
}
export default Card;

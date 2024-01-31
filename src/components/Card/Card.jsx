import { useState } from "react";
import Button from "../AppUI/Buttons/Button";
function Card(props) {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const [deleted, setDeleted] = useState(false);
  const handleDelete = () => {
    setDeleted(!deleted);
  };
  const [transcription, setTranscription] = useState(props.transcription);
  const [translation, setTranslation] = useState(props.translation);
  const [topic, setTopic] = useState(props.topic);
  const [name, setName] = useState(props.name);

  if (!props.new && props.main)
    return (
      <div className="card-main-container" key={props.id}>
        <h3>{props.name}</h3>
        <h3>{props.transcription}</h3>
        <h3> {props.translation}</h3>
        <h3>{props.topic}</h3>
        <div className="buttons-container"></div>
      </div>
    );
  if (edit && !deleted)
    return (
      <div className="card-container" key={props.id}>
        <input
          className="added-word"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="added-word"
          value={transcription}
          onChange={(e) => setTranscription(e.target.value)}
        ></input>
        <input
          className="added-word"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        ></input>
        <input
          className="added-word"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></input>
        <div className="buttons-container">
          <Button class="button-save" text="Save" onclick={handleEdit} />
          <Button class="button-delete" text="Delete" onclick={handleDelete} />
        </div>
      </div>
    );
  if (!edit && !deleted)
    return (
      <div className="card-container" key={props.id}>
        <h3>{name}</h3>
        <h3>{transcription}</h3>
        <h3> {translation}</h3>
        <h4> {topic}</h4>
        <div className="buttons-container">
          <Button class="button-change" text="Change" onclick={handleEdit} />
          <Button class="button-delete" text="Delete" onclick={handleDelete} />
        </div>
      </div>
    );
  if (deleted) return null;
}

export default Card;

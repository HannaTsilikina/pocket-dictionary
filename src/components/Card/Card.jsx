import { useEffect, useState } from "react";
import Button from "../AppUI/Buttons/Button";

function Card(props) {
  const [errorValues, setErrorValue] = useState("");
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const [deleted, setDeleted] = useState(false);
  const handleDelete = () => {
    setDeleted(!deleted);
  };
  const handleSave = () => {
    setEdit(!edit);
    console.log(
      `name: ${name}, transcription: ${transcription}, translation: ${translation}, topic: ${topic}`
    );
  };
  const [transcription, setTranscription] = useState(props.transcription);
  const [translation, setTranslation] = useState(props.translation);
  const [topic, setTopic] = useState(props.topic);
  const [name, setName] = useState(props.name);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name.trim() === "") {
      setErrorValue("name");
      setErrorMessage("Please enter the correct name");
    }
    if (topic.trim() === "") {
      setErrorValue("topic");
      setErrorMessage("Please enter the correct topic");
    }
    if (translation.trim() === "") {
      setErrorValue("translation");
      setErrorMessage("Please enter the correct translation");
    }
    if (transcription.trim() === "") {
      setErrorValue("transcription");
      setErrorMessage("Please enter the correct transcription");
    }

    {
    }
  }, [name, topic, translation, transcription]);

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
      <div className="card-main">
        <div className="card-container" key={props.id}>
          <input
            className={
              errorValues === "name" ? "added-word-error" : "added-word"
            }
            value={name}
            onChange={(e) => {
              if (name.trim() === "") {
                setErrorValue("name");
              }
              setName(e.target.value);
              setErrorValue("");
              setErrorMessage("");
            }}
          ></input>
          <input
            className={
              errorValues === "transcription"
                ? "added-word-error"
                : "added-word"
            }
            value={transcription}
            onChange={(e) => {
              if (transcription.trim() === "") {
                setErrorValue("transcription");
              }
              setTranscription(e.target.value);
              setErrorValue("");
              setErrorMessage("");
            }}
          ></input>
          <input
            className={
              errorValues === "translation" ? "added-word-error" : "added-word"
            }
            value={translation}
            onChange={(e) => {
              if (translation.trim() === "") {
                setErrorValue("translation");
              }
              setTranslation(e.target.value);
              setErrorValue("");
              setErrorMessage("");
            }}
          ></input>
          <input
            className={
              errorValues === "topic" ? "added-word-error" : "added-word"
            }
            value={topic}
            onChange={(e) => {
              if (topic.trim() === "") {
                setErrorValue("topic");
              }
              setTopic(e.target.value);
              setErrorValue("");
              setErrorMessage("");
            }}
          ></input>
          <div className="buttons-container">
            <Button
              class="button-save"
              text="Save"
              onclick={handleSave}
              disabledButton={errorValues}
            />
            <Button
              class="button-delete"
              text="Delete"
              onclick={handleDelete}
            />
          </div>
        </div>
        <p>{errorMessage}</p>
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

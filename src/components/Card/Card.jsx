import { useEffect, useState } from "react";
import Button from "../AppUI/Buttons/Button";

function Card(props) {
  const [errorValues, setErrorValue] = useState({
    name: false,
    translation: false,
    transcription: false,
    topic: false,
  });
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
  let incorrectData = `${errorValues.name}, ${errorValues.transcription} ${errorValues.translation} ${errorValues.topic} `;
  useEffect(() => {
    if (name.trim() === "") {
      setErrorValue({
        errorValues,
      });
      setErrorMessage(`Please enter the correct ${incorrectData}`);
    }
    if (topic.trim() === "") {
      // setErrorValue({
      //   errorValues,
      // });
      setErrorMessage(`Please enter the correct ${incorrectData}`);
    }
    if (translation.trim() === "") {
      // setErrorValue({
      //   errorValues,
      // });
      setErrorMessage(`Please enter the correct ${incorrectData}`);
    }
    if (transcription.trim() === "") {
      // setErrorValue({
      //   errorValues,
      // });
      setErrorMessage(`Please enter the correct ${incorrectData}`);
    }
    // else {
    //   setErrorValue({
    //     name: false,
    //     translation: false,
    //     transcription: false,
    //     topic: false,
    //   });
    // }
  }, [name, topic, translation, transcription]);
  useEffect(() => console.log(errorValues));
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
              errorValues.name === true ? "added-word-error" : "added-word"
            }
            value={name}
            onChange={(e) => {
              if (name.trim() === "" && errorValues.name === false) {
                setErrorValue({
                  name: true,
                  translation: false,
                  transcription: false,
                  topic: false,
                });
              }
              setName(e.target.value);
              setErrorValue(errorValues);

              setErrorMessage(`Please enter the correct ${incorrectData}`);
            }}
          ></input>
          <input
            className={
              errorValues.transcription === true
                ? "added-word-error"
                : "added-word"
            }
            value={transcription}
            onChange={(e) => {
              if (
                transcription.trim() === "" &&
                errorValues.transcription === false
              ) {
                setErrorValue({
                  name: false,
                  translation: false,
                  transcription: true,
                  topic: false,
                });
                console.log(errorValues);
              }
              setTranscription(e.target.value);
              setErrorValue(errorValues);

              setErrorMessage(`Please enter the correct ${incorrectData}`);
            }}
          ></input>
          <input
            className={
              errorValues.translation === true
                ? "added-word-error"
                : "added-word"
            }
            value={translation}
            onChange={(e) => {
              if (
                translation.trim() === "" &&
                errorValues.translation === false
              ) {
                setErrorValue({
                  name: false,
                  translation: true,
                  transcription: false,
                  topic: false,
                });
                console.log(errorValues);
              }
              setTranslation(e.target.value);

              setErrorValue(errorValues);
              setErrorMessage(`Please enter the correct ${incorrectData}`);
            }}
          ></input>
          <input
            className={
              errorValues.topic === true ? "added-word-error" : "added-word"
            }
            value={topic}
            onChange={(e) => {
              if (topic.trim() === "" && errorValues.topic === false) {
                setErrorValue({
                  name: false,
                  translation: false,
                  transcription: false,
                  topic: true,
                });
              }
              setTopic(e.target.value);
              setErrorValue(errorValues);
              setErrorMessage(`Please enter the correct ${incorrectData}`);
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
      <div className="card-main">
        <div className="card-container" key={props.id}>
          <h3>{name}</h3>
          <h3>{transcription}</h3>
          <h3> {translation}</h3>
          <h4> {topic}</h4>
          <div className="buttons-container">
            <Button class="button-change" text="Change" onclick={handleEdit} />
            <Button
              class="button-delete"
              text="Delete"
              onclick={handleDelete}
            />
          </div>
        </div>
      </div>
    );
  if (deleted) return null;
}

export default Card;

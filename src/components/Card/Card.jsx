import { useEffect, useState } from "react";
import Button from "../AppUI/Buttons/Button";

function Card(props) {
  const [errorValues, setErrorValue] = useState({
    inputName: false,
    inputTranscription: false,
    inputTranslation: false,
    inputTopic: false,
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
      `name: ${inputs.inputName}, transcription: ${inputs.inputTranscription}, translation: ${inputs.inputTranslation}, topic: ${inputs.inputTopic}`
    );
  };
  const [inputs, setInputState] = useState({
    inputName: props.name,
    inputTranscription: props.transcription,
    inputTranslation: props.translation,
    inputTopic: props.topic,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (Object.values(errorValues).includes(true)) {
      let wrongInputs = [];
      for (let i = 0; i < Object.values(errorValues).length; i++) {
        if (Object.values(errorValues)[i] === true) {
          if (Object.keys(errorValues)[i] === "inputName") {
            wrongInputs.push("english word");
          }
          if (Object.keys(errorValues)[i] === "inputTranscription") {
            wrongInputs.push("transcription");
          }
          if (Object.keys(errorValues)[i] === "inputTranslation") {
            wrongInputs.push("translation");
          }
          if (Object.keys(errorValues)[i] === "inputTopic") {
            wrongInputs.push("topic");
          }
        }
      }

      setErrorMessage(`Please enter the correct ${wrongInputs.join(",")} `);
    } else {
      setErrorMessage("");
    }
  }, [errorValues]);

  const handleInputChange = (e, stringOfKey, setInputState) => {
    if (e.target.value.trim() === "" && errorValues[stringOfKey] === false) {
      setErrorValue({
        ...errorValues,
        [stringOfKey]: true,
      });
    } else {
      setErrorValue({
        ...errorValues,
        [stringOfKey]: false,
      });
    }
    setInputState({ ...inputs, [stringOfKey]: e.target.value });
  };

  const handleInputTranscriptionCheck = (e, setInputState) => {
    let value = e.target.value.trim();
    if (value[0] !== "[" || value[value.length - 1] !== "]") {
      setErrorValue({
        ...errorValues,
        ["inputTranscription"]: true,
      });
    } else {
      setErrorValue({
        ...errorValues,
        ["inputTranscription"]: false,
      });
    }
    setInputState({ ...inputs, ["inputTranscription"]: e.target.value });
  };

  const handleCheckCyrillicPattern = (e, nameOfInput, setInputState) => {
    const cyrillicPattern = /^[А-ЯЁ]+$/i;
    let result = cyrillicPattern.test(e.target.value.trim());
    if (result) {
      setErrorValue({
        ...errorValues,
        [nameOfInput]: false,
      });
    } else {
      setErrorValue({
        ...errorValues,
        [nameOfInput]: true,
      });
    }
    setInputState({ ...inputs, [nameOfInput]: e.target.value });
  };
  const handleCheckLatinPattern = (e, nameOfInput, setInputState) => {
    const latinPattern = /^[A-Z]+$/i;
    let result = latinPattern.test(e.target.value.trim());
    if (result) {
      setErrorValue({
        ...errorValues,
        [nameOfInput]: false,
      });
    } else {
      setErrorValue({
        ...errorValues,
        [nameOfInput]: true,
      });
    }
    setInputState({ ...inputs, [nameOfInput]: e.target.value });
  };

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
              errorValues.inputName === true ? "added-word-error" : "added-word"
            }
            value={inputs.inputName}
            type="text"
            onChange={(e) => {
              handleInputChange(e, "inputName", setInputState);
              handleCheckLatinPattern(e, "inputName", setInputState);
            }}
          ></input>
          <input
            className={
              errorValues.inputTranscription === true
                ? "added-word-error"
                : "added-word"
            }
            value={inputs.inputTranscription}
            type="text"
            onChange={(e) => {
              handleInputChange(e, "inputTranscription", setInputState);
              handleInputTranscriptionCheck(e, setInputState);
            }}
          />
          <input
            className={
              errorValues.inputTranslation === true
                ? "added-word-error"
                : "added-word"
            }
            value={inputs.inputTranslation}
            type="text"
            onChange={(e) => {
              handleInputChange(e, "inputTranslation", setInputState);
              handleCheckCyrillicPattern(e, "inputTranslation", setInputState);
            }}
          ></input>
          <input
            className={
              errorValues.inputTopic === true
                ? "added-word-error"
                : "added-word"
            }
            value={inputs.inputTopic}
            type="text"
            onChange={(e) => {
              handleInputChange(e, "inputTopic", setInputState);
              handleCheckCyrillicPattern(e, "inputTopic", setInputState);
            }}
          ></input>
          <div className="buttons-container">
            <Button
              class="button-save"
              text="Save"
              onclick={handleSave}
              disabledButton={Object.values(errorValues).includes(true)}
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
          <h3>{inputs.inputName}</h3>
          <h3>{inputs.inputTranscription}</h3>
          <h3> {inputs.inputTranslation}</h3>
          <h4> {inputs.inputTopic}</h4>
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

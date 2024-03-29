import { useEffect, useState } from "react";
import Button from "../AppUI/Buttons/Button";
import Input from "components/AppUI/Input/Input";
import useValidationOfWords from "hooks/useValidationOfWords";

function Card(props) {
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

  const validateOfName = useValidationOfWords(inputs.inputName, /^[A-Z]+$/i);
  const validateOfTranscription = useValidationOfWords(
    inputs.inputTranscription
  );
  const validateOfTranslation = useValidationOfWords(
    inputs.inputTranslation,
    /^[А-ЯЁ]+$/i
  );
  const validateOfTopic = useValidationOfWords(inputs.inputTopic, /^[А-ЯЁ]+$/i);

  const [errorValues, setErrorValue] = useState({
    inputName: false,
    inputTranscription: false,
    inputTranscriptionFormat: false,
    inputTranslation: false,
    inputTopic: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorValue({
      inputName: validateOfName.inputError,
      inputTranscriptionFormat: validateOfTranscription.transcriptionError,
      inputTranslation: validateOfTranslation.inputError,
      inputTopic: validateOfTopic.inputError,
    });
  }, [inputs]);

  useEffect(() => {
    if (Object.values(errorValues).includes(true)) {
      let wrongInputs = [];
      for (let i = 0; i < Object.values(errorValues).length; i++) {
        if (Object.values(errorValues)[i] === true) {
          if (Object.keys(errorValues)[i] === "inputName") {
            wrongInputs.push("english word");
          }
          if (Object.keys(errorValues)[i] === "inputTranscriptionFormat") {
            wrongInputs.push(
              `transcription: Transcription have to start with "[" and ends with "]"`
            );
          }
          if (Object.keys(errorValues)[i] === "inputTranslation") {
            wrongInputs.push("translation");
          }
          if (Object.keys(errorValues)[i] === "inputTopic") {
            wrongInputs.push("topic");
          }
        }
      }
      if (wrongInputs.includes("transcriptionFormat")) {
        setErrorMessage(`Please enter the correct ${wrongInputs.join(",")}"`);
      } else {
        setErrorMessage(`Please enter the correct ${wrongInputs.join(",")} `);
      }
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
          <Input
            error={errorValues.inputName}
            value={inputs.inputName}
            handleInputChange={(e) => {
              handleInputChange(e, "inputName", setInputState);
            }}
          />
          <Input
            error={
              errorValues.inputTranscription ||
              errorValues.inputTranscriptionFormat
            }
            value={inputs.inputTranscription}
            handleInputChange={(e) =>
              handleInputChange(e, "inputTranscription", setInputState)
            }
          />
          <Input
            error={errorValues.inputTranslation}
            value={inputs.inputTranslation}
            handleInputChange={(e) =>
              handleInputChange(e, "inputTranslation", setInputState)
            }
          />
          <Input
            error={errorValues.inputTopic}
            value={inputs.inputTopic}
            handleInputChange={(e) =>
              handleInputChange(e, "inputTopic", setInputState)
            }
          />

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

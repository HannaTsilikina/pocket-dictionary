import Input from "components/AppUI/Input/Input";
import Card from "components/Card/Card";
import useValidationOfWords from "hooks/useValidationOfWords";
import { ContextOfWords } from "Providers/ContextWords/ContextWords";
import { useContext, useEffect, useState } from "react";
import Button from "../AppUI/Buttons/Button";

function CardAddingInputs(props) {
  const { addedWord, listOfWords } = useContext(ContextOfWords);

  const [adding, setAdding] = useState(false);
  const handleAdding = () => {
    addedWord(inputs, +(listOfWords.length + 15366));
    setAdding(!adding);
  };
  const handleChangeMode = () => {
    setAdding(!adding);
  };
  //
  const [inputs, setInputState] = useState({
    inputName: "example",
    inputTranscription: "[example]",
    inputTranslation: "пример",
    inputTopic: "general",
  });

  const validateOfName = useValidationOfWords(inputs.inputName, /^[A-Z]+$/i);
  const validateOfTranscription = useValidationOfWords(
    inputs.inputTranscription
  );
  const validateOfTranslation = useValidationOfWords(
    inputs.inputTranslation,
    /^[А-ЯЁ]+$/i
  );
  const validateOfTopic = useValidationOfWords(inputs.inputTopic, /^[A-Z]+$/i);

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
  useEffect(() => {
    setErrorValue({
      inputName: false,
      inputTranscription: false,
      inputTranscriptionFormat: false,
      inputTranslation: false,
      inputTopic: false,
    });
  }, [adding]);

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

  if (adding)
    return (
      <>
        <Card
          name="Russian word"
          transcription="Transcription"
          translation="Translation"
          topic="Category"
          main={true}
        />

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
              handleInputChange={(e) => {
                handleInputChange(e, "inputTranscription", setInputState);
              }}
            />
            <Input
              error={errorValues.inputTranslation}
              value={inputs.inputTranslation}
              handleInputChange={(e) => {
                handleInputChange(e, "inputTranslation", setInputState);
              }}
            />
            <Input
              error={errorValues.inputTopic}
              value={inputs.inputTopic}
              handleInputChange={(e) => {
                handleInputChange(e, "inputTopic", setInputState);
              }}
            />

            <div className="buttons-container">
              <Button
                className="button-save"
                text="Save"
                onclick={handleAdding}
                disabledButton={Object.values(errorValues).includes(true)}
              />
              <Button
                className="button-change"
                text="Exit"
                onclick={handleChangeMode}
              />
            </div>
          </div>
          <p>{errorMessage}</p>
        </div>
      </>
    );
  if (!adding)
    return (
      <>
        <Card
          name="Russian word"
          transcription="Transcription"
          translation="Translation"
          topic="Category"
          main={true}
          handleAdding={handleChangeMode}
        />
      </>
    );
}

export default CardAddingInputs;

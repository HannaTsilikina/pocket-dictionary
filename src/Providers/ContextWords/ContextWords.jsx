import React, { useState, useEffect, createContext } from "react";
import {
  getWordsApi,
  changedWordApi,
  deleteWordApi,
  addedWordApi,
} from "API/words";
const ContextOfWords = createContext();

const ContextOfWordsProvider = (props) => {
  const [listOfWords, setListOfWords] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWordsApi()
      .then(function (response) {
        setListOfWords(response.data);
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
        setError(err);
      });
  }, [listOfWords]);

  const deleteWord = (idOfWord) => {
    deleteWordApi(idOfWord).then(function (response) {
      console.log(`deleted ${idOfWord}`);
    });
  };

  const changedWord = (idOfWord, wordInfo) => {
    const item = {
      id: idOfWord,
      english: wordInfo.inputName,
      transcription: wordInfo.inputTranscription,
      russian: wordInfo.inputTranslation,
      tags: wordInfo.inputTopic,
    };
    changedWordApi(item).then(function (response) {
      console.log(`changed ${idOfWord}`);
    });
  };

  const addedWord = (wordInfo, id) => {
    const item = {
      id: id,
      english: wordInfo.inputName,
      transcription: wordInfo.inputTranscription,
      russian: wordInfo.inputTranslation,
      tags: wordInfo.inputTopic,
    };
    addedWordApi(item).then(function (response) {
      console.log(`added ` + id);
    });
  };

  return (
    <ContextOfWords.Provider
      value={{
        listOfWords,
        setListOfWords,
        loading,
        error,
        deleteWord,
        changedWord,
        addedWord,
      }}
    >
      {props.children}
    </ContextOfWords.Provider>
  );
};
export { ContextOfWordsProvider, ContextOfWords };

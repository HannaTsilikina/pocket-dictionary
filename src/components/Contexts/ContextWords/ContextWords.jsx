import React, { useState, useEffect, createContext } from "react";
const ContextOfWords = createContext();

const ContextOfWordsProvider = (props) => {
  const [listOfWords, setListOfWords] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const changeListOfWords = (newArray) => {
    setListOfWords(newArray);
  };
  useEffect(() => {
    fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("Something went wrong");
        }
      })
      .then((response) => {
        changeListOfWords(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  const deleteWord = (idOfWord) => {
    fetch(`https://itgirlschool.justmakeit.ru/api/words/${idOfWord}/delete`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(`deleted ${idOfWord}`));
  };

  const changedWord = (idOfWord, wordInfo) => {
    const item = {
      id: idOfWord,
      english: wordInfo.inputName,
      transcription: wordInfo.inputTranscription,
      russian: wordInfo.inputTranslation,
      tags: wordInfo.inputTopic,
    };
    fetch(`https://itgirlschool.justmakeit.ru/api/words/${idOfWord}/update`, {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(`changed ${idOfWord}`));
  };

  const addedWord = (wordInfo, id) => {
    const item = {
      id: id,
      english: wordInfo.inputName,
      transcription: wordInfo.inputTranscription,
      russian: wordInfo.inputTranslation,
      tags: wordInfo.inputTopic,
    };
    fetch(`https://itgirlschool.justmakeit.ru/api/words/add`, {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(item));
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

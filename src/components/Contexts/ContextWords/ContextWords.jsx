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
    fetch("http://itgirlschool.justmakeit.ru/api/words")
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
      .catch((err) => setError(err));
  }, []);

  return (
    <ContextOfWords.Provider
      value={{ listOfWords, setListOfWords, loading, error }}
    >
      {props.children}
    </ContextOfWords.Provider>
  );
};
export { ContextOfWordsProvider, ContextOfWords };

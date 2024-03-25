import CardList from "components/CardList/CardList";
import NotFound from "components/NotFound/NotFound";
import TrainMode from "components/TrainMode/TrainMode";
import { useEffect } from "react";
import { getWordsApi } from "API/words";
import { Route, Routes } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { addedWordApi, changedWordApi, deleteWordApi } from "API/words";

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

const MainContainer = inject(["store"])(
  observer(({ store }) => {
    store.setLoading(true);
    useEffect(() => {
      getWordsApi()
        .then(function (response) {
          store.setListOfWords(response.data);
          store.setLoading(false);
        })
        .catch(function (err) {
          store.setLoading(false);
          store.setError(err);
        });
    }, [store.listOfWords]);

    return (
      <Routes>
        <Route path="/dictionary" index element={<CardList />} />
        <Route
          path="/game"
          element={<TrainMode array={store.listOfWords} number={0} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  })
);
export { MainContainer, addedWord, deleteWord, changedWord };

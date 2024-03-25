// import {
//   getWordsApi,
//   changedWordApi,
//   deleteWordApi,
//   addedWordApi,
// } from "API/words";
// import {action, observable, autorun} from 'mobx';

// class  WordsStore {
//   @observable listOfWords=[];

//   @action deleteWord = (idOfWord) => {
//     deleteWordApi(idOfWord).then(function (response) {
//       console.log(`deleted ${idOfWord}`);
//     });
//   };

//   @action  changedWord = (idOfWord, wordInfo) => {
//     const item = {
//       id: idOfWord,
//       english: wordInfo.inputName,
//       transcription: wordInfo.inputTranscription,
//       russian: wordInfo.inputTranslation,
//       tags: wordInfo.inputTopic,
//     };
//     changedWordApi(item).then(function (response) {
//       console.log(`changed ${idOfWord}`);
//     });
//   };
//   @action  addedWord = (wordInfo, id) => {
//     const item = {
//       id: id,
//       english: wordInfo.inputName,
//       transcription: wordInfo.inputTranscription,
//       russian: wordInfo.inputTranslation,
//       tags: wordInfo.inputTopic,
//     };
//     addedWordApi(item).then(function (response) {
//       console.log(`added ` + id);
//     });
//   };

//   @autorun(() =>  {
//   getWordsApi()
//   .then(function (response) {
//     changeListOfWords(response.data);
//     setLoading(false);
//   })
//   .catch(function (err) {
//     setLoading(false);
//     setError(err);
//   })
//   }
// );

// }

//   export default WordsStore;

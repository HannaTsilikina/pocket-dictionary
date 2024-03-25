import CardList from "components/CardList/CardList";
import NotFound from "components/NotFound/NotFound";
import TrainMode from "components/TrainMode/TrainMode";
import { useEffect } from "react";
import { getWordsApi } from "API/words";
import { Route, Routes } from "react-router-dom";
import { observer, inject } from "mobx-react";

const MainContainer = inject(["store"])(
  observer(({ store }) => {
    useEffect(() => {
      store.setLoading(true);
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
          element={<TrainMode array={listOfWords} number={0} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  })
);
export default MainContainer;

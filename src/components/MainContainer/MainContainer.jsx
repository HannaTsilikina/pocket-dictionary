import CardList from "components/CardList/CardList";
import NotFound from "components/NotFound/NotFound";
import TrainMode from "components/TrainMode/TrainMode";
import { ContextOfWords } from "Providers/ContextWords/ContextWords";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

const MainContainer = () => {
  const { listOfWords } = useContext(ContextOfWords);

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
};
export default MainContainer;

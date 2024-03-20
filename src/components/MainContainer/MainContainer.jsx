import PrivatyPolicy from "components/auth/PrivatyPolicy/PrivatyPolicy";
import SignIn from "components/auth/SignIn/SignIn";
import SignUp from "components/auth/SignUp/SignUp";
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
      <Route path="/main" index element={<CardList />} />
      <Route
        path="/game"
        element={<TrainMode array={listOfWords} number={0} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/privatypolicy" element={<PrivatyPolicy />} />
    </Routes>
  );
};
export default MainContainer;

import NotFound from "components/NotFound/NotFound";
import TrainMode from "components/TrainMode/TrainMode";
import PrivatyPolicy from "components/auth/PrivatyPolicy/PrivatyPolicy";
import SignIn from "components/auth/SignIn/SignIn";
import SignUp from "components/auth/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import CardList from "components/CardList/CardList";
import Authorization from "components/auth/Authorization/Authorization";
import { useContext } from "react";
import { ContextOfWords } from "components/Contexts/ContextWords/ContextWords";

const MainContainer = () => {
  const { listOfWords } = useContext(ContextOfWords);
  return (
    <Routes>
      <Route path="/dictionary" element={<CardList />} />
      <Route
        path="/game"
        element={<TrainMode array={listOfWords} number={0} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/privatypolicy" element={<PrivatyPolicy />} />
      <Route path="/" index element={<Authorization />} />
    </Routes>
  );
};
export default MainContainer;

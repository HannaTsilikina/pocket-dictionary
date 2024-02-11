import SignIn from "components/auth/SignIn/SignIn";
import SignUp from "components/auth/SugnUp/SignUp";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/styleAppMain.scss";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import TrainMode from "./components/TrainMode/TrainMode";
import listOfWords from "./store/store";
import PrivatyPolicy from "components/auth/PrivatyPolicy/PrivatyPolicy";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<CardList />} />
          <Route
            path="/game"
            element={<TrainMode array={listOfWords} number={0} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/privatypolicy" element={<PrivatyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./assets/styles/styleAppMain.scss";
import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import TrainMode from "./components/TrainMode/TrainMode";
import listOfWords from "./store/store";
import NotFound from "./components/NotFound/NotFound";

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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

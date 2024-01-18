import "./assets/styles/styleAppMain.scss";
import { Routes, Route } from "react-router-dom";
import CardsList from "./components/CardList/CardsList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import TrainMode from "./components/TrainMode/TrainMode";
import listOfWords from "./store/store";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Header />}></Route>

          <Route index element={<CardsList />} />
          <Route
            path="/train"
            element={<TrainMode array={listOfWords} number={0} />}
          />
          <Route path="*" element={<CardsList />} />

          <Route path="/" element={<Footer />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

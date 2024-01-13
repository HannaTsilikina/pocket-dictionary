import "./components/styles/styleAppMain.scss";
import { Routes, Route } from "react-router-dom";
import CardsList from "./components/CardList/CardsList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LearnCard from "./components/LearnCard/LearnCard";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Header />}></Route>

          <Route index element={<CardsList />} />
          <Route
            path="/learn"
            element={
              <LearnCard
                english="plane"
                russian="самолет"
                transcription="[pleɪn]"
                key="23"
              />
            }
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

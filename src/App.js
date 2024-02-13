import "./assets/styles/styleAppMain.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContainer from "components/MainContainer/MainContainer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;

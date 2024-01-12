import "./components/styles/styleAppMain.css";

import CardsList from "./components/CardList/CardsList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <CardsList />
      <Footer />
    </div>
  );
}

export default App;

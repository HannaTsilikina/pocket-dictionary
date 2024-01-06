import "../src/components/styles/AppMain/styleAppMain.css";

import CardsList from "./components/CardsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

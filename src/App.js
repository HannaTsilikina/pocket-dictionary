import "../src/components/styles/AppMain/styleAppMain.css";
import WordsList from "./components/WordsList";
import CardsList from "./components/CardsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <WordsList />
      <CardsList />
    </div>
  );
}

export default App;

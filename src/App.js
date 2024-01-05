import "../src/components/styles/AppMain/styleAppMain.css";

import CardsList from "./components/CardsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <CardsList />
    </div>
  );
}

export default App;

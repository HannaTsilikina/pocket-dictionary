import Loader from "components/AppUI/Loaders/Loader";
import CardAddingInputs from "components/CardAddingInputs/CardAddingIntuts";
import { ContextOfWords } from "components/Contexts/ContextWords/ContextWords";
import Card from "components/Card/Card";
import { useContext } from "react";
import "../../assets/styles/styleAppMain.scss";
import "../Card/CardStyle.scss";

function CardsList() {
  const { listOfWords, loading, error } = useContext(ContextOfWords);

  return (
    <main className="cardsList-container">
      <CardAddingInputs />
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>
          If you have problems on the server, please contact the support service
        </h1>
      ) : (
        listOfWords.map((element) => {
          return (
            <>
              <Card
                key={element.id}
                id={element.id}
                name={element.english}
                transcription={element.transcription}
                translation={element.russian}
                topic={element.tags}
                new={element.new}
                main={element.main}
              />
            </>
          );
        })
      )}
    </main>
  );
}
export default CardsList;

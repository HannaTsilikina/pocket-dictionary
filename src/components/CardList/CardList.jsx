import Loader from "components/AppUI/Loaders/Loader";
import { ContextOfWords } from "components/Contexts/ContextWords/ContextWords";
import { useContext } from "react";
import "../../assets/styles/styleAppMain.scss";
import Card from "../Card/Card";
import "../Card/CardStyle.scss";

function CardsList() {
  const { listOfWords, loading, error } = useContext(ContextOfWords);

  return (
    <main className="cardsList-container">
      <Card
        name="Russian word"
        transcription="Transcription"
        translation="Translation"
        topic="Category"
        main={true}
      />

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

import Card from "../Card/Card";
import "../../assets/styles/styleAppMain.scss";
import "../Card/CardStyle.scss";
import listOfWords from "../../store/store";

let listOfCards = listOfWords.map((element) => {
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
});

function CardsList() {
  return (
    <div className="cardsList-container">
      <Card
        name="Слово"
        transcription="Транскрипция"
        translation="Перевод"
        topic="Категория"
        main={true}
      />
      {listOfCards}
    </div>
  );
}
export default CardsList;

import Card from "./Card";

function CardsList() {
  return (
    <div className="cardsList-container">
      <Card
        name="Apple"
        transcription="[ˈæpl]"
        translation="Яблоко"
        topic="Fruits"
      ></Card>
      <Card
        name="Banana"
        transcription="[bəˈnænə]"
        translation="Банан"
        topic="Fruits"
      ></Card>
    </div>
  );
}
export default CardsList;

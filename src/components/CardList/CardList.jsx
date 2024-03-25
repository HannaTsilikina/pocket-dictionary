import Loader from "components/AppUI/Loaders/Loader";
import Card from "components/Card/Card";
import CardAddingInputs from "components/CardAddingInputs/CardAddingIntuts";
import "../../assets/styles/styleAppMain.scss";
import "../Card/CardStyle.scss";
import "./CardList.scss";

const CardsList = inject(["store"])(
  observer(({ store }) => {
    const getContent = () => {
      if (store.loading) return <Loader />;
      if (store.error)
        return (
          <h1>
            If you have problems on the server, please contact the support
            service
          </h1>
        );
      return (
        <>
          {store.listOfWords.map((element) => {
            return (
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
            );
          })}
        </>
      );
    };

    return (
      <main className="cardsList-container">
        <CardAddingInputs />
        {getContent()}
      </main>
    );
  })
);
export default CardsList;

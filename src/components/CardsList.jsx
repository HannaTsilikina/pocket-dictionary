import Card from "./Card";
import "../components/styles/Card/CardStyle.scss";

let listOfWords = [
  {
    id: "15092",
    english: "plane",
    transcription: "[pleɪn]",
    russian: "самолет",
    tags: "транспорт",
    tags_json: '["u0442u0440u0430u043du0441u043fu043eu0440u0442"]',
  },
  {
    id: "15093",
    english: "pasta",
    transcription: "[ˈpæstə]",
    russian: "паста",
    tags: "еда",
    tags_json: '["u0435u0434u0430"]',
  },
  {
    id: "15094",
    english: "pretty",
    transcription: "[ˈprɪti]",
    russian: "хорошенький",
    tags: "прилагательное",
    tags_json:
      '["u043fu0440u0438u043bu0430u0433u0430u0442u0435u043bu044cu043du043eu0435"]',
  },
  {
    id: "15095",
    english: "tomato",
    transcription: "[təˈmɑːtəʊ]",
    russian: "помидор",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
  },
  {
    id: "15096",
    english: "flower",
    transcription: "[ˈflaʊə]",
    russian: "цветок",
    tags: "растения",
    tags_json: '["u0440u0430u0441u0442u0435u043du0438u044f"]',
  },
  {
    id: "15104",
    english: "dog",
    transcription: "[dɒg]",
    russian: "собака",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "15105",
    english: "ocean",
    transcription: "[əʊʃn]",
    russian: "океан",
    tags: "стихия",
    tags_json: '["u0441u0442u0438u0445u0438u044f"]',
  },
  {
    id: "15111",
    english: "butterfly",
    transcription: "[ˈbʌtəflaɪ]",
    russian: "бабочка",
    tags: "насекомые",
    tags_json: '["u043du0430u0441u0435u043au043eu043cu044bu0435"]',
  },
  {
    id: "15114",
    english: "offspring",
    transcription: "[ˈɒfsprɪŋ]",
    russian: "потомство",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "15115",
    english: "disrespectful",
    transcription: "[ˌdɪsrɪsˈpɛktfʊl]",
    russian: "неуважительный",
    tags: "прилагательное",
    tags_json:
      '["u043fu0440u0438u043bu0430u0433u0430u0442u0435u043bu044cu043du043eu0435"]',
  },
  {
    id: "15116",
    english: "to conspire",
    transcription: "[kənˈspaɪə]",
    russian: "cговориться",
    tags: "глагол",
    tags_json: '["u0433u043bu0430u0433u043eu043b"]',
  },
  {
    id: "15123",
    english: "conjecture",
    transcription: "[kənˈʤɛkʧə]",
    russian: "догадка",
    tags: "мышление",
    tags_json: '["u043cu044bu0448u043bu0435u043du0438u0435"]',
  },
];

let listOfCards = [];
listOfCards.push(
  <Card
    main={true}
    name="Слово"
    transcription="Транскрипция"
    translation="Перевод"
    topic=""
    id=""
  />
);
listOfWords.forEach((element) => {
  listOfCards.push(
    <Card
      name={element.english}
      transcription={element.transcription}
      translation={element.russian}
      topic={element.tags}
      id={element.id}
    />
  );
});

function CardsList() {
  return <div className="cardsList-container">{listOfCards}</div>;
}
export default CardsList;

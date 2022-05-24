import { useState } from "react";
import "./App.scss";
import Flashcard from "./components/Flashcard/Flashcard";
import QuestionsList from "./components/QuestionsList/QuestionsList";
import { data } from "./utils/questions";
import { FlashcardItem } from "./types/types";
import { useMediaQuery } from "react-responsive";
import MobileList from "./components/MobileList/MobileList";

const App = () => {
  const [cardType, setCardType] = useState<string>("javascript");
  const [card, setCard] = useState<FlashcardItem>(data.javascript[0]);
  const [isFlipped, setFlipped] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div className="app-container">
      <Flashcard isFlipped={isFlipped} setFlipped={setFlipped} cardType={cardType} card={card} />

      {isMobile ? (
        <MobileList
          data={data}
          cardType={cardType}
          setCardType={setCardType}
          setCard={setCard}
          isFlipped={isFlipped}
          setFlipped={setFlipped}
          activeCardId={active}
          setActive={setActive}
        />
      ) : (
        <QuestionsList
          data={data}
          cardType={cardType}
          setCardType={setCardType}
          setCard={setCard}
          isFlipped={isFlipped}
          setFlipped={setFlipped}
          activeCardId={active}
          setActive={setActive}
        />
      )}
    </div>
  );
};

export default App;

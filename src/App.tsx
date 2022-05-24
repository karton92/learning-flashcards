import { useState } from "react";
import "./App.scss";
import Flashcard from "./components/Flashcard/Flashcard";
import ListContainer from "./components/ListContainer/ListContainer";
import { data } from "./questions/questions";
import { FlashcardItem } from "./types/types";

const App = () => {
  const [cardType, setCardType] = useState("javascript");
  const [card, setCard] = useState<FlashcardItem>(data.javascript[0]);
  const [isFlipped, setFlipped] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="app-container">
      <Flashcard isFlipped={isFlipped} setFlipped={setFlipped} cardType={cardType} card={card} />
      <ListContainer
        data={data}
        cardType={cardType}
        setCardType={setCardType}
        setCard={setCard}
        isFlipped={isFlipped}
        setFlipped={setFlipped}
        activeCardId={active}
        setActive={setActive}
      />
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.scss";
import Flashcard from "./components/Flashcard";
import List from "./components/List";
import { data } from "./utils/data";
import { FlashcardItem } from "./types/types";

const App = () => {
  const [cardType, setCardType] = useState<number>(0);
  const [card, setCard] = useState<FlashcardItem>(data.javascript[0]);
  const [isFlipped, setFlipped] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);

  return (
    <div className="app-container">
      <Flashcard
        isFlipped={isFlipped}
        setFlipped={setFlipped}
        cardType={cardType}
        card={card}
      />
      <List
        data={data}
        cardType={cardType}
        setCardType={setCardType}
        setCard={setCard}
        isFlipped={isFlipped}
        setFlipped={setFlipped}
        isActive={active}
        setActive={setActive}
      />
    </div>
  );
};

export default App;

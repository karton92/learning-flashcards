import { useEffect, useState } from "react";
import { FlashcardItem, FlashcardsListProps } from "../types/types";
import { listButtons } from "../utils/data";
import Button from "./Button";
import "./QuestionsList.scss";

const QuestionsList = ({
  data,
  cardType,
  setCardType,
  setCard,
  setFlipped,
  isActive,
  setActive,
}: FlashcardsListProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(
    data.javascript
  );

  //CARDS HANDLE SECTION
  const handleCardType = (cardNumber: number) => {
    switch (cardNumber) {
      case 0:
        setFlashcards(data.javascript);
        setCard(data.javascript[0]);
        break;
      case 1:
        setFlashcards(data.css);
        setCard(data.css[0]);
        break;
      case 2:
        setFlashcards(data.html);
        setCard(data.html[0]);
        break;
      case 3:
        setFlashcards(data.react);
        setCard(data.react[0]);
        break;
      default:
        alert(`There no such fishcards`);
        return;
    }
    setFlipped(false);
    setActive(1);
  };

  useEffect(() => {
    handleCardType(cardType);
  }, [cardType]);

  const handleSingleCard = (item: any) => {
    setCard(item);
    setFlipped(false);
    setActive(item.id);
  };
  //END CARDS HANDLE SECTION

  return (
    <div className="list-container">
      <div className="list-header">
        {listButtons.map((item, index) => (
          <Button id={index} title={item} setCardType={setCardType} />
        ))}
      </div>
      <div className="list-body">
        <ul>
          {flashcards.map((item: any) => (
            <li
              className={item.id === isActive ? "active" : ""}
              onClick={() => handleSingleCard(item)}
              key={item.id}
            >{`${item.id}. ${item.title}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsList;

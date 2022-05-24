import { useEffect, useState } from "react";
import { FlashcardItem, FlashcardsListProps } from "../../types/types";
import { listButtons } from "../../utils/questions";
import Button from "../Button/Button";
import "./QuestionsList.scss";

const QuestionsList = ({ data, cardType, setCardType, setCard, setFlipped, activeCardId, setActive }: FlashcardsListProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(data.javascript);

  const handleCardType = (cardType: string) => {
    switch (cardType) {
      case "javascript":
        setFlashcards(data.javascript);
        setCard(data.javascript[0]);
        break;
      case "css":
        setFlashcards(data.css);
        setCard(data.css[0]);
        break;
      case "html":
        setFlashcards(data.html);
        setCard(data.html[0]);
        break;
      case "react":
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

  const handleSingleCard = (item: FlashcardItem) => {
    setCard(item);
    setFlipped(false);
    setActive(item.id);
  };

  return (
    <div className="list-container">
      <div className="list-header">
        {listButtons.map((item) => (
          <Button key={item} title={item} setCardType={setCardType} />
        ))}
      </div>
      <div className="list-body">
        <ul>
          {flashcards.map((item) => (
            <li
              className={item.id === activeCardId ? "active" : ""}
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

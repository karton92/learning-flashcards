import React from "react";
import { FlashcardItem } from "../../types/types";
import { listButtons } from "../../questions/questions";
import Button from "../Button/Button";
import "./QuestionsList.scss";

type QuestionsListContainerProps = {
  flashcards: FlashcardItem[];
  setCardType: React.Dispatch<React.SetStateAction<string>>;
  handleSingleCard: any;
  activeCardId: number;
};

const QuestionsList = ({ flashcards, setCardType, handleSingleCard, activeCardId }: QuestionsListContainerProps) => {
  return (
    <aside className="list-container">
      <header className="list-header">
        {listButtons.map((item) => (
          <Button key={item} title={item} setCardType={setCardType} />
        ))}
      </header>
      <section className="list-body">
        <ul>
          {flashcards.map((item: { id: number; title: string }) => (
            <li
              className={item.id === activeCardId ? "active" : ""}
              onClick={() => handleSingleCard(item)}
              key={item.id}
            >{`${item.id}. ${item.title}`}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default QuestionsList;

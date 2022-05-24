import { useEffect, useState } from "react";
import { FlashcardItem, FlashcardsListProps } from "../../types/types";
import { listButtons } from "../../utils/questions";
import ButtonList from "../Button/Button";
import "./QuestionsList.scss";
import { useMediaQuery } from "react-responsive";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const QuestionsList = ({ data, cardType, setCardType, setCard, setFlipped, activeCardId, setActive }: FlashcardsListProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(data.javascript);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  const toggleDrawer = () => (event: { type?: string; key?: string }) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen((prevState) => !prevState);
  };

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

  return isMobile ? (
    <div>
      <Button id="button-list" onClick={toggleDrawer()}>
        Lista pytań
      </Button>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer()}>
        <Box className="mobile-box" role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
          <div className="list-container">
            <div className="list-header">
              {listButtons.map((item) => (
                <ButtonList key={item} title={item} setCardType={setCardType} />
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
        </Box>
      </Drawer>
    </div>
  ) : (
    <div className="list-container">
      <div className="list-header">
        {listButtons.map((item) => (
          <ButtonList key={item} title={item} setCardType={setCardType} />
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

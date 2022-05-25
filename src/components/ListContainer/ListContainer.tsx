import { useEffect, useState, useCallback } from "react";
import { FlashcardItem, FlashcardsListProps } from "../../types/types";
import "./ListContainer.scss";
import { useMediaQuery } from "react-responsive";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import QuestionsList from "../QuestionsList/QuestionsList";

const ListContainer = ({ data, cardType, setCardType, setCard, setFlipped, activeCardId, setActive }: FlashcardsListProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(data.javascript);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  const toggleDrawer = () => (event: { type?: string; key?: string }) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen((prevState) => !prevState);
  };

  const changeCardType = useCallback(
    (cardType: string) => {
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
    },
    [data, setActive, setCard, setFlipped]
  );

  useEffect(() => {
    changeCardType(cardType);
  }, [cardType, changeCardType]);

  const handleSingleCard = (item: FlashcardItem) => {
    setCard(item);
    setFlipped(false);
    setActive(item.id);
  };

  return isMobile ? (
    <>
      <Button id="button-list" onClick={toggleDrawer()}>
        Lista pytań
      </Button>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer()}>
        <Box className="mobile-box" role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
          <QuestionsList flashcards={flashcards} setCardType={setCardType} handleSingleCard={handleSingleCard} activeCardId={activeCardId} />
        </Box>
      </Drawer>
    </>
  ) : (
    <QuestionsList flashcards={flashcards} setCardType={setCardType} handleSingleCard={handleSingleCard} activeCardId={activeCardId} />
  );
};

export default ListContainer;

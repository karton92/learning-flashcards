import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FlashcardsListProps } from "../../types/types";
import QuestionsList from "../QuestionsList/QuestionsList";
import "./MobileList.scss";

const MobileList = ({ data, cardType, setCardType, setCard, isFlipped, setFlipped, activeCardId, setActive }: FlashcardsListProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => (event: { type?: string; key?: string }) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button id="button-list" onClick={toggleDrawer()}>
        Lista pytań
      </Button>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer()}>
        <Box className="mobile-box" role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
          <QuestionsList
            data={data}
            cardType={cardType}
            setCardType={setCardType}
            setCard={setCard}
            isFlipped={isFlipped}
            setFlipped={setFlipped}
            activeCardId={activeCardId}
            setActive={setActive}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileList;

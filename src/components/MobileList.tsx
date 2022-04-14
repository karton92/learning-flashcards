import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FlashcardsListProps } from "../types/types";
import QuestionsList from "./QuestionsList";
import "./MobileList.scss";

const MobileList = ({
  data,
  cardType,
  setCardType,
  setCard,
  isFlipped,
  setFlipped,
  isActive,
  setActive,
}: FlashcardsListProps) => {
  const [state, setState] = useState({
    top: false,
  });
  const anchor = "top";

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      className="mobile-box"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <QuestionsList
        data={data}
        cardType={cardType}
        setCardType={setCardType}
        setCard={setCard}
        isFlipped={isFlipped}
        setFlipped={setFlipped}
        isActive={isActive}
        setActive={setActive}
      />
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <Button id="button-list" onClick={toggleDrawer(anchor, true)}>
            Lista pytań
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
};

export default MobileList;

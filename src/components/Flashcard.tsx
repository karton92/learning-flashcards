import "./Flashcard.scss";
import jsIcon from "../images/icons/js_icon.png";
import cssIcon from "../images/icons/css_icon.png";
import htmlIcon from "../images/icons/html_icon.png";
import reactIcon from "../images/icons/react_icon.png";
import { FlashcardsProps } from "../types/types";

function Flashcard({ isFlipped, setFlipped, card, cardType }: FlashcardsProps) {
  const imgHandler = (cardType: number) => {
    switch (cardType) {
      case 0:
        return jsIcon;
      case 1:
        return cssIcon;
      case 2:
        return htmlIcon;
      case 3:
        return reactIcon;
      default:
        console.log(`There is no image like ${cardType}.`);
        return;
    }
  };

  const classHandler = (cardType: number) => {
    switch (cardType) {
      case 0:
        return "javascript";
      case 1:
        return "css";
      case 2:
        return "html";
      case 3:
        return "react";
      default:
        console.log(`There is no class.`);
        return;
    }
  };

  return (
    <div
      onClick={() => setFlipped(!isFlipped)}
      className={`card ${isFlipped ? "flipped" : ""}`}
    >
      <div className={`card-face card-front ${classHandler(cardType)}`}>
        <h2>{card.type}</h2>
        <h3>{card.title}</h3>
        <img src={imgHandler(cardType)} alt={`Icon for ${cardType}`} />
      </div>
      <div className="card-face card-back">
        <div className="card-content">
          <div className={`card-header ${classHandler(cardType)}`}>
            <img src={imgHandler(cardType)} alt={`Icon for ${cardType}`} />
            <h2>{card.type}</h2>
          </div>
          <div className="card-body">
            <h3>{card.title}</h3>
            <>{card.body}</>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

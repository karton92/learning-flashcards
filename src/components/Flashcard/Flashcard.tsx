import "./Flashcard.scss";
import jsIcon from "../../assets/icons/js_icon.png";
import cssIcon from "../../assets/icons/css_icon.png";
import htmlIcon from "../../assets/icons/html_icon.png";
import reactIcon from "../../assets/icons/react_icon.png";
import unknownIcon from "../../assets/icons/unknown_icon.png";
import { FlashcardsProps } from "../../types/types";

function Flashcard({ isFlipped, setFlipped, card, cardType }: FlashcardsProps) {
  const getLangIconSrc = (cardType: string) => {
    switch (cardType) {
      case "javascript":
        return jsIcon;
      case "css":
        return cssIcon;
      case "html":
        return htmlIcon;
      case "react":
        return reactIcon;
      default:
        return unknownIcon;
    }
  };

  const handleCardClass = (cardType: string) => {
    switch (cardType) {
      case "javascript":
        return "javascript";
      case "css":
        return "css";
      case "html":
        return "html";
      case "react":
        return "react";
      default:
        return "unknown";
    }
  };

  return (
    <div onClick={() => setFlipped(!isFlipped)} className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className={`card-face card-front ${handleCardClass(cardType)}`}>
        <h2>{card.type}</h2>
        <h3>{card.title}</h3>
        <img src={getLangIconSrc(cardType)} alt={`Icon for ${cardType}`} />
      </div>
      <div className="card-face card-back">
        <div className="card-content">
          <div className={`card-header ${handleCardClass(cardType)}`}>
            <img src={getLangIconSrc(cardType)} alt={`Icon for ${cardType}`} />
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

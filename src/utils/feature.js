//KEYBOARD HANDLE SECTION
//   export const handleKeyboardChange = (
//     event: React.KeyboardEvent<HTMLLIElement> | KeyboardEvent
//   ) => {
//     switch (event.key) {
//       case "ArrowLeft":
//         setCardType((cardType = cardType - 1));
//         handleCardType(cardType);

//         console.log(cardType);
//         console.log(flashcards);
//         break;

//       case "ArrowRight":
//         setCardType((cardType = cardType + 1));
//         handleCardType(cardType);

//         console.log(cardType);
//         console.log(flashcards);
//         break;

//       case "ArrowUp":
//         console.log("up");
//         setActive((isActive = isActive - 1));
//         setFlipped(false);
//         setCard(flashcards[isActive - 1]);
//         break;

//       case "ArrowDown":
//         console.log("down");
//         setActive((isActive = isActive + 1));
//         setFlipped(false);
//         setCard(flashcards[isActive - 1]);
//         break;

//       case " ":
//         setFlipped((isFlipped = !isFlipped));
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyboardChange);
//   }, []);

//   useEffect(() => {
//     handleCardType(cardType);
//   }, [cardType]);

//END KEYBOARD HANDLE SECTION

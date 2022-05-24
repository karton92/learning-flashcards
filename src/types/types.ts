export type FlashcardItem = {
  id: number;
  title: string;
  body: JSX.Element;
  type: string;
};

export type FlashcardsProps = {
  isFlipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  cardType: string;
  card: FlashcardItem;
};

export type FlashcardsListProps = {
  data: FlashcardsData;
  cardType: string;
  setCardType: React.Dispatch<React.SetStateAction<string>>;
  setCard: any;
  isFlipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  activeCardId: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export type FlashcardsData = {
  javascript: FlashcardItem[];
  css: FlashcardItem[];
  html: FlashcardItem[];
  react: FlashcardItem[];
};

export type FlashcardItem = {
  id: number;
  title: string;
  body: JSX.Element;
  type: string;
};

export type FlashcardsProps = {
  isFlipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  cardType: number;
  card: FlashcardItem;
};

export type FlashcardsListProps = {
  data: FlashcardsData;
  cardType: number;
  setCardType: React.Dispatch<React.SetStateAction<number>>;
  setCard: any;
  isFlipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export type FlashcardsData = {
  javascript: FlashcardItem[];
  css: FlashcardItem[];
  html: FlashcardItem[];
  react: FlashcardItem[];
};

export type ListButtonProps = {
  id: number;
  title: string;
  setCardType: React.Dispatch<React.SetStateAction<number>>;
};

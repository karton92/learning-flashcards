import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../utils/data";

type FlashcardSingleItem = {
  id: number;
  title: string;
  body: string;
  type: string;
};

type FlashcardsData = {
  javascript: FlashcardSingleItem[];
  css: FlashcardSingleItem[];
  html: FlashcardSingleItem[];
  react: FlashcardSingleItem[];
};

type FlashcardsListProps = {
  data: FlashcardsData;
  cardsType: number;
  viewedCard: FlashcardSingleItem;
  isCardFlipped: boolean;
  activeCard: number;
  flashcardsList: FlashcardSingleItem[];
};

const initialState: FlashcardsListProps = {
  data: data,
  cardsType: 0,
  viewedCard: data.javascript[0],
  isCardFlipped: false,
  activeCard: 1,
  flashcardsList: data.javascript,
};

export const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    handleCardType: (state, action) => {
      switch (state.cardsType) {
        case 0:
          state.flashcardsList = data.javascript;
          state.viewedCard = data.javascript[0];
          break;
        case 1:
          state.flashcardsList = data.css;
          state.viewedCard = data.css[0];
          break;
        case 2:
          state.flashcardsList = data.html;
          state.viewedCard = data.html[0];
          break;
        case 3:
          state.flashcardsList = data.react;
          state.viewedCard = data.react[0];
          break;
        default:
          alert(`There no such fishcards`);
          return;
      }
      state.isCardFlipped = false;
      state.activeCard = 1;
    },
    handleSingleCard: (state, action: PayloadAction<any>) => {
      const { item } = action.payload;
      state.viewedCard = item;
      state.isCardFlipped = false;
      state.activeCard = item.id;
    },
    changeCardTypeNumber: (state, action) => {
      const { id } = action.payload;
      state.cardsType = id;
    },
  },
});

// States
export const dataValue = (state: FlashcardsListProps) => state.data;
export const cardsTypeValue = (state: FlashcardsListProps) => state.cardsType;
export const viewedCardValue = (state: FlashcardsListProps) => state.viewedCard;
export const isCardFlippedValue = (state: FlashcardsListProps) =>
  state.isCardFlipped;
export const activeCardValue = (state: FlashcardsListProps) => state.activeCard;
export const flashcardsListValue = (state: FlashcardsListProps) =>
  state.flashcardsList;

// Action creators are generated for each case reducer function
export const { handleCardType, handleSingleCard, changeCardTypeNumber } =
  flashcardsSlice.actions;

export default flashcardsSlice.reducer;
